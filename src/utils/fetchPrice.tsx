import { SearchedVehicleResult } from "../typings/types";

export const fetchPrice = async (
    vehiclesType: string,
    brandCode: string,
    model: string,
    year: string,
    setState: React.Dispatch<React.SetStateAction<SearchedVehicleResult>>
  ) => {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${vehiclesType}/marcas/${brandCode}/modelos/${model}/anos/${year}`
      );
    const data = await response.json();
    setState(data);
};
