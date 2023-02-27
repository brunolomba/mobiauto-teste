import { Model } from "../typings/types";

export const fetchModels = async (
    vehiclesType: string,
    brandCode: string,
    setState: React.Dispatch<React.SetStateAction<Model>>
  ) => {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${vehiclesType}/marcas/${brandCode}/modelos`
      );
    const data = await response.json();
    setState(data);
};
