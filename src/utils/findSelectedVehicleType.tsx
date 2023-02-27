import { BrandsByType } from "@/typings/types";

export const findSelectedVehicleType = (
  brandCode: string,
  objectAllBrands: BrandsByType,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  for (let [vehicleType, arrayBrandsByType] of Object.entries(objectAllBrands)) {
    const matchedBrand = arrayBrandsByType.find(brand => brand.codigo === brandCode);

    if (matchedBrand) {
      setState(vehicleType);
    }
  }
};