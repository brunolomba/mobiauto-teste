import { Year } from "../typings/types";

export const fetchYears = async (
    vehiclesType: string,
    brandCode: string,
    model: string,
    setState: React.Dispatch<React.SetStateAction<Year>>
  ) => {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${vehiclesType}/marcas/${brandCode}/modelos/${model}/anos`
      );
    const data = await response.json();
    setState(data);
};
