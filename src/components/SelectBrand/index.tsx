import {
  InputLabel,
  FormControl,
  Select
} from "@material-ui/core";
import { useContext} from "react";
import { SearchContext } from "@/context/SearchContext";
import { Styled } from "../../typings/types";

const styled: Styled = {
  select: {
    borderRadius: "5px",
    backgroundColor: "white",
    border: "1px solid lightGray",
    marginBottom: "15px"
  }
}

export default function SelectBrand() {
  const {
    brandsByType,
    selectedBrandCode,
    setSelectedBrandCode,
    setSelectedModel,
    setSelectedYear
  } = useContext(SearchContext)


  const handleBrandChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedBrandCode(event.target.value as string);
    setSelectedModel("");
    setSelectedYear("");
  };

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel>Marca</InputLabel>
      <Select native value={selectedBrandCode} onChange={handleBrandChange} style={styled.select}>
        <option value=""></option>
        <optgroup label="CARROS">
          {brandsByType.carros?.map(brand => (
            <option key={brand.codigo} value={brand.codigo}>
              {brand.nome.toUpperCase()}
            </option>
          ))}
        </optgroup>
        <optgroup label="MOTOS">
          {brandsByType.motos?.map(brand => (
            <option key={brand.codigo} value={brand.codigo}>
              {brand.nome.toUpperCase()}
            </option>
          ))}
        </optgroup>
        <optgroup label="CAMINHÕES">
          {brandsByType.caminhoes?.map(brand => (
            <option key={brand.codigo} value={brand.codigo}>
              {brand.nome.toUpperCase()}
            </option>
          ))}
        </optgroup>
      </Select>
    </FormControl>
  )
}