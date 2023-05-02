export interface Empleado {
  status: string;
  data: Datum[];
  message: string;
}
export interface Datum {
  id: string;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}
export interface EmpleadoNuevo {
  status: string;
  data:   Data;
}
export interface Data {
  name:   string;
  salary: string;
  age:    string;
  id:     string;
}