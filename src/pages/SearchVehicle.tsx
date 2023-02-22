import {
  InputLabel,
  FormControl,
  Button,
  Box,
  Select,
  Typography,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'

import { Brand, Model, Year, SearchedVehicleResult } from "../typings/types";

type Styled = {
  [key: string]: {
    [key: string]: string
  }
}

const styled: Styled = {
  h1: {
    fontSize: "35px",
    fontWeight: "700",
    marginBottom: "10px"
  },
  h2: {
    fontSize: "25px",
    fontWeight: "700",
    marginBottom: "15px"
  },
  body1: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "10px"
  },
  price: {
    display: "inline-block",
    fontSize: "25px",
    fontWeight: "700",
    marginBottom: "15px",
    backgroundColor: "#079f86",
    borderRadius: "50px",
    color: "white",
    padding: "5px 15px",
  },
  smallText: {
    display: "block",
    fontSize: "12px",
    fontWeight: "400",
    color: "gray",
  },
  select: {
    borderRadius: "5px",
    backgroundColor: "white",
    border: "1px solid lightGray",
    marginBottom: "15px"
  },
  button: {
    marginTop: "10px",
    padding: "7px 30px",
    fontWeight: "700",
    textTransform: "lowercase"
  },
  buttonDisabled: {
    marginTop: "10px",
    fontWeight: "700",
    backgroundColor: "#d9d9d9",
    color: "#a1a1a1",
    textTransform: "lowercase"
  },
  containerResult: {
    margin: "0 auto",
    padding: "40px",
    textAlign: "center",
    width: "100%",
    backgroundColor: "#dcf5f2",
  }
}

export default function SearchVehicle() {
  const [carBrands, setCarBrands] = useState<Brand[]>([]);
  const [motorcycleBrands, setMotorcycleBrands] = useState<Brand[]>([]);
  const [truckBrands, setTruckBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [years, setYears] = useState<Year[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [searchedVehicleResult, setSearchedVehicleResult] =
    useState<SearchedVehicleResult>({});
  const [showPriceResult, setShowPriceResult] = useState<boolean>(false);

  useEffect(() => {
    const fetchCarBrands = async () => {
      const response = await fetch(
        "https://parallelum.com.br/fipe/api/v1/carros/marcas"
      );
      const data = await response.json();
      setCarBrands(data);
    };
    fetchCarBrands();

    const fetchMotorcycleBrands = async () => {
      const response = await fetch(
        "https://parallelum.com.br/fipe/api/v1/motos/marcas"
      );
      const data = await response.json();
      setMotorcycleBrands(data);
    };
    fetchMotorcycleBrands();

    const fetchTruckBrands = async () => {
      const response = await fetch(
        "https://parallelum.com.br/fipe/api/v1/caminhoes/marcas"
      );
      const data = await response.json();
      setTruckBrands(data);
    };
    fetchTruckBrands();
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      const fetchModels = async () => {
        const response = await fetch(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos`
        );
        const data = await response.json();
        setModels(data.modelos);
      };
      fetchModels();
    } else {
      setModels([]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      const fetchYears = async () => {
        const response = await fetch(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos/${selectedModel}/anos`
        );
        const data = await response.json();
        setYears(data);
      };
      fetchYears();
    } else {
      setYears([]);
    }
  }, [selectedModel]);

  useEffect(() => {
    if (selectedBrand && selectedModel && selectedYear) {
      const fetchPrice = async () => {
        const response = await fetch(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos/${selectedModel}/anos//${selectedYear}`
        );
        const data = await response.json();
        setSearchedVehicleResult(data);
      };
      fetchPrice();
    } else {
      setSearchedVehicleResult({});
    }
  }, [selectedYear]);

  const handleBrandChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedBrand(event.target.value as string);
  };

  const handleModelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedModel(event.target.value as string);
  };

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedYear(event.target.value as string);
  };

  const handleButtonSubmit = () => {
    console.log(searchedVehicleResult);
    setShowPriceResult(true);
  };

  return (
    <>
      <div className={styles.containerTexts}>
      <Typography variant="h1" style={styled.h1}>
        Tabela Fipe
      </Typography>
      <Typography variant="body1" style={styled.body1}>
        Consulte o valor de um veículo de forma gratuita
      </Typography>
      </div>
      <div className={styles.containerSelects}>
        <FormControl fullWidth variant="filled">
          <InputLabel>Marca</InputLabel>
          <Select native value={selectedBrand} onChange={handleBrandChange} style={styled.select}>
            <option value=""></option>
            <optgroup label="CARROS">
              {carBrands.map((brand) => (
                <option key={brand.codigo} value={brand.codigo}>
                  {brand.nome}
                </option>
              ))}
            </optgroup>
            <optgroup label="MOTOS">
              {motorcycleBrands.map((brand) => (
                <option key={brand.codigo} value={brand.codigo}>
                  {brand.nome}
                </option>
              ))}
            </optgroup>
            <optgroup label="CAMINHÕES">
              {truckBrands.map((brand) => (
                <option key={brand.codigo} value={brand.codigo}>
                  {brand.nome}
                </option>
              ))}
            </optgroup>
          </Select>
        </FormControl>
        <FormControl fullWidth variant="filled">
          <InputLabel>Modelo</InputLabel>
          <Select native value={selectedModel} onChange={handleModelChange} style={styled.select}>
            <option value=""></option>
            {models.map((model) => (
              <option key={model.codigo} value={model.codigo}>
                {model.nome}
              </option>
            ))}
          </Select>
        </FormControl>
        {selectedBrand && selectedModel && (
          <FormControl fullWidth variant="filled">
            <InputLabel>Ano</InputLabel>
            <Select native value={selectedYear} onChange={handleYearChange} style={styled.select}>
              <option value=""></option>
              {years.map((year) => (
                <option key={year.codigo} value={year.codigo}>
                  {year.nome}
                </option>
              ))}
            </Select>
          </FormControl>
        )}
        <Box display="flex" justifyContent="center" alignItems="center">
          {selectedYear ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonSubmit}
              style={styled.button}
            >
              Consultar preço
            </Button>
          ) : (
            <Button variant="contained" color="primary" disabled
            style={styled.buttonDisabled}>
              Consultar preço
            </Button>
          )}
        </Box>
      </div>
      {showPriceResult && (
        <Box style={styled.containerResult}>
          <Typography variant="h2" style={styled.h2}>
          {`Tabela Fipe: Preço ${searchedVehicleResult.Marca} ${searchedVehicleResult.Modelo} ${searchedVehicleResult.AnoModelo}`}
          </Typography>
          <Typography variant="h2" style={styled.price}>
          {searchedVehicleResult.Valor}
          </Typography>
          <Typography variant="caption" style={styled.smallText}>
            Este é o preço de compra do veículo
          </Typography>
        </Box>
      )}
    </>
  )
}