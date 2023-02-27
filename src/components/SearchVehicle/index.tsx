import {
  Box,
} from "@material-ui/core";
import { useContext} from "react";
import { SearchContext } from "@/context/SearchContext";
import { Styled } from "../../typings/types";
import { ButtonSearch } from "../Button";
import SelectBrand from "../SelectBrand"
import SelectModel from "../SelectModel";
import SelectYear from "../SelectYear";

const styled: Styled = {
  containerSelects: {
    width: "400px",
    margin: "0 auto",
    background: "#FFFFFF",
    padding: "20px 40px",
    borderRadius: "10px",
    marginBottom: "50px",
    boxShadow: "2px 2px 2px lightgray"
  }
}

export default function SearchVehicle() {
  const {
    selectedBrandCode,
    selectedModel,
  } = useContext(SearchContext)
  
  return (
    <>
      <Box style={styled.containerSelects}>
        <SelectBrand />
        <SelectModel />
        {selectedBrandCode && selectedModel && ( <SelectYear />)}
        <ButtonSearch />
      </Box>
    </>
  )
}