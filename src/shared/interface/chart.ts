export interface ILabelChart {
  title: string;
  color: string;
}

export interface IDataChart {
  label: string;
  colums: {
    data: number;
  }[];
}
