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

export default function SelectYear() {
  const {
    years,
    selectedYear,
    setSelectedYear
  } = useContext(SearchContext)

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedYear(event.target.value as string);
  };

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel>Ano</InputLabel>
      <Select native value={selectedYear} onChange={handleYearChange} style={styled.select}>
        <option value=""></option>
        {years?.map((year) => (
          <option key={year.codigo} value={year.codigo}>
            {year.nome}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}