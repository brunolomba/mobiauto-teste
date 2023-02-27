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

export default function SelectModel() {
  const {
    models,
    selectedModel,
    setSelectedModel,
    setSelectedYear
  } = useContext(SearchContext)

  const handleModelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedModel(event.target.value as string);
    setSelectedYear("")
  };

  return (
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
  )
}