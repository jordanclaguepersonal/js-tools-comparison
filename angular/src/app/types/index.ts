export interface Column {
  id: number;
  label: string;
}

export interface Task {
  column: number;
  id: number;
  title: string;
  description: string;
}
