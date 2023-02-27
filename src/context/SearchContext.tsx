import { fetchBrands } from "@/utils/fetchBrands";
import { fetchModels } from "@/utils/fetchModels";
import { fetchYears } from "@/utils/fetchYears";
import { findSelectedVehicleType } from "@/utils/findSelectedVehicleType";
import { createContext, useEffect, useState } from "react";
import {
  BrandsByType,
  Model,
  SearchedVehicleResult,
  Year,
} from "../typings/types";

interface SearchContext {
  brandsByType: BrandsByType;
  setBrandsByType: React.Dispatch<React.SetStateAction<BrandsByType>>;
  selectedVehicleType: string;
  setSelectedVehicleType: React.Dispatch<React.SetStateAction<string>>
  selectedBrandCode: string;
  setSelectedBrandCode: React.Dispatch<React.SetStateAction<string>>
  models: Model;
  setModels: React.Dispatch<React.SetStateAction<Model>>
  selectedModel: string;
  setSelectedModel: React.Dispatch<React.SetStateAction<string>>
  years: Year;
  setYears: React.Dispatch<React.SetStateAction<Year>>
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>
  searchedVehicleResult: SearchedVehicleResult;
  setSearchedVehicleResult: React.Dispatch<React.SetStateAction<SearchedVehicleResult>>
}

export const SearchContext = createContext<SearchContext>(
  {} as SearchContext
);

type SearchProviderProps = {
  children: React.ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [brandsByType, setBrandsByType] = useState<BrandsByType>(
    {
      carros: [{
        nome: "",
        codigo: ""
      }],
      motos: [{
        nome: "",
        codigo: ""
      }],
      caminhoes: [{
        nome: "",
        codigo: ""
      }]
    }
  );
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [selectedBrandCode, setSelectedBrandCode] = useState("");
  const [models, setModels] = useState<Model>(
    {
      anos: [{
        nome: "",
        codigo: ""
      }],
      modelos: [{
        nome: "",
        codigo: ""
      }],
    }
  );
  const [selectedModel, setSelectedModel] = useState("");
  const [years, setYears] = useState<Year>(
    [{
      nome: "",
      codigo: ""
    }]
  );
  const [selectedYear, setSelectedYear] = useState("");
  const [searchedVehicleResult, setSearchedVehicleResult] = useState<
    SearchedVehicleResult
  >({});

  useEffect(() => {
    const storedData = localStorage.getItem("searchContextData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBrandsByType(parsedData.brandsByType);
      setSelectedVehicleType(parsedData.selectedVehicleType);
      setSelectedBrandCode(parsedData.selectedBrandCode);
      setModels(parsedData.models);
      setSelectedModel(parsedData.selectedModel);
      setYears(parsedData.years);
      setSelectedYear(parsedData.selectedYear);
      setSearchedVehicleResult(parsedData.searchedVehicleResult);
    }
  }, []);

  const vehiclesTypes = [
    "carros",
    "motos",
    "caminhoes"
  ]
  
  useEffect(() => {
    vehiclesTypes.forEach((type) => {
      fetchBrands(type, setBrandsByType);
    });
  },[]);

  useEffect(() => {
    if (selectedBrandCode) {
      findSelectedVehicleType(
        selectedBrandCode,
        brandsByType,
        setSelectedVehicleType
      )
    }
  }, [selectedBrandCode, selectedVehicleType]);
  
  useEffect(() => {
    if (selectedVehicleType && selectedBrandCode) {
      fetchModels(
        selectedVehicleType,
        selectedBrandCode,
        setModels
      )
    }
  }, [selectedVehicleType, selectedBrandCode]);
  
  useEffect(() => {
    if (selectedVehicleType && selectedBrandCode && selectedModel) {
      fetchYears(
        selectedVehicleType,
        selectedBrandCode,
        selectedModel,
        setYears
      )
    }
  }, [selectedBrandCode, selectedModel]);

  useEffect(() => {
    const searchData = {
      brandsByType,
      selectedVehicleType,
      selectedBrandCode,
      models,
      selectedModel,
      years,
      selectedYear,
      searchedVehicleResult
    };
    localStorage.setItem("searchContextData", JSON.stringify(searchData));
  }, [brandsByType, selectedVehicleType, selectedBrandCode, models, selectedModel, years, selectedYear, searchedVehicleResult]);

  return (
    <SearchContext.Provider
      value={{
        brandsByType,
        setBrandsByType,
        selectedVehicleType,
        setSelectedVehicleType,
        selectedBrandCode,
        setSelectedBrandCode,
        models,
        setModels,
        selectedModel,
        setSelectedModel,
        years,
        setYears,
        selectedYear,
        setSelectedYear,
        searchedVehicleResult,
        setSearchedVehicleResult
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};