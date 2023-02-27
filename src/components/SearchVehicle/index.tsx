import {
  InputLabel,
  FormControl,
  Box,
  Select
} from "@material-ui/core";
import { useContext} from "react";
import { SearchContext } from "@/context/SearchContext";
import { Styled } from "../../typings/types";
import { ButtonSearch } from "../Button";
import SelectBrand from "../SelectBrand"
import SelectModel from "../SelectModel";

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
  }
}

export default function SearchVehicle() {
  const {
    selectedBrandCode,
    selectedModel,
    years, 
    selectedYear,
    setSelectedYear
  } = useContext(SearchContext)

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedYear(event.target.value as string);
  };

  return (
    <>
      <Box style={styled.containerSelects}>
        <SelectBrand />
        <SelectModel />
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
        <ButtonSearch />
      </Box>
    </>
  )
}