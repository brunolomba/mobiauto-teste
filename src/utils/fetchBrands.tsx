import { BrandsByType } from "../typings/types";

export const fetchBrands = async (
    type: string,
    setState: React.Dispatch<React.SetStateAction<BrandsByType>>
  ) => {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/${type}/marcas`
  );
  const data = await response.json();
  
  if (type === "carros") { setState((prevState) => ({...prevState, carros: data}))}
  if (type === "motos") { setState((prevState) => ({...prevState, motos: data}))}
  if (type === "caminhoes") { setState((prevState) => ({...prevState, caminhoes: data}))}
};