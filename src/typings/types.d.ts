type DataFormat = {
  nome: string;
  codigo: string;
};

export type Brand = DataFormat

export type BrandsByType = {
  carros: Brand[],
  motos: Brand[],
  caminhoes: Brand[]
}

export type Model = {
  anos: [ DataFormat ],
  modelos: [ DataFormat ]
}

export type Year = [ DataFormat ]

export type SearchedVehicleResult = {
  AnoModelo?: string;
  Marca?: string;
  Modelo?: string;
  Valor?: string;
};

export type Styled = {
  [key: string]: {
    [key: string]: string
  }
}