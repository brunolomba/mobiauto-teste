export type Brand = {
  nome: string;
  codigo: string;
};

export type Model = {
  nome: string;
  codigo: string;
};

export type Year = {
  nome: string;
  codigo: string;
};

export type SearchedVehicleResult = {
  AnoModelo?: string;
  Marca?: string;
  Modelo?: string;
  Valor?: string;
};