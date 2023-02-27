import {
  InputLabel,
  FormControl,
  Button,
  Box,
  Select,
  Typography,
} from "@material-ui/core";
import { useContext} from "react";
import { SearchContext } from "@/context/SearchContext";

import { Styled } from "../../typings/types";
import Link from "next/link";

const styled: Styled = {
  containerSelects: {
    width: "400px",
    margin: "0 auto",
    background: "#FFFFFF",
    padding: "20px 40px",
    borderRadius: "10px",
    marginBottom: "50px",
    boxShadow: "2px 2px 2px lightgray"
  },
  select: {
    borderRadius: "5px",
    backgroundColor: "white",
    border: "1px solid lightGray",
    marginBottom: "15px"
  },
  containerButton: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    marginTop: "10px",
    padding: "7px 30px",
    fontWeight: "700",
    backgroundColor: "#5d00c0",
    color: "#FFFFFF",
    textTransform: "lowercase"
  },
  buttonDisabled: {
    marginTop: "10px",
    padding: "7px 30px",
    fontWeight: "700",
    backgroundColor: "#d9d9d9",
    color: "#a1a1a1",
    textTransform: "lowercase"
  }
}

export default function SearchVehicle() {
  const {
    brandsByType,
    selectedBrandCode, setSelectedBrandCode,
    models, 
    selectedModel, setSelectedModel,
    years, 
    selectedYear, setSelectedYear
  } = useContext(SearchContext)


  const handleBrandChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedBrandCode(event.target.value as string);
    setSelectedModel("");
    setSelectedYear("");
  };

  const handleModelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedModel(event.target.value as string);
    setSelectedYear("")
  };

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedYear(event.target.value as string);
  };

  return (
    <>
      <Box style={styled.containerSelects}>
        <FormControl fullWidth variant="filled">
          <InputLabel>Marca</InputLabel>
          <Select native value={selectedBrandCode} onChange={handleBrandChange} style={styled.select}>
            <option value=""></option>
            <optgroup label="CARROS">
            {brandsByType.carros?.map(brand => (
              <option key={brand.codigo} value={brand.codigo}>
                {brand.nome.toUpperCase()}
              </option>
            ) 
            )}
            </optgroup>
            <optgroup label="MOTOS">
            {brandsByType.motos?.map(brand => (
              <option key={brand.codigo} value={brand.codigo}>
                {brand.nome.toUpperCase()}
              </option>
            ) 
            )}
            </optgroup>
            <optgroup label="CAMINHÕES">
            {brandsByType.caminhoes?.map(brand => (
              <option key={brand.codigo} value={brand.codigo}>
                {brand.nome.toUpperCase()}
              </option>
            ) 
            )}
            </optgroup>
          </Select>
        </FormControl>
        <FormControl fullWidth variant="filled">
          <InputLabel>Modelo</InputLabel>
          <Select native value={selectedModel} onChange={handleModelChange} style={styled.select}>
            <option value=""></option>
            {models.modelos?.map((modelo) => (
              <option key={`modelCode-${modelo.codigo}`} value={modelo.codigo}>
                {modelo.nome}
              </option>
            ))}
          </Select>
        </FormControl>
        {selectedBrandCode && selectedModel && (
          <FormControl fullWidth variant="filled">
            <InputLabel>Ano</InputLabel>
            <Select native value={selectedYear} onChange={handleYearChange} style={styled.select}>
              <option value=""></option>
              {/* {console.log(years)} */}
              {years?.map((year) => (
                <option key={year.codigo} value={year.codigo}>
                  {year.nome}
                </option>
              ))}
            </Select>
          </FormControl>
        )}
        <Box style={styled.containerButton}>
          {selectedYear ? (
            <Link href={"/search-result"}>
              <Button
                variant="contained"
                style={styled.button}
              >
                Consultar preço
              </Button>
            </Link>
          ) : (
            <Button
            variant="contained"
            color="primary"
            disabled
            style={styled.buttonDisabled}
            >
              Consultar preço
            </Button>
          )}
        </Box>
      </Box>
    </>
  )
}