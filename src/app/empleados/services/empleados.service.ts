import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Data, Empleado } from '../interfaces/empleados.interface';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _url: string = 'https://dummy.restapiexample.com/api/v1'

  constructor(private _http: HttpClient) {

  }

  getEmployees(): Observable<Empleado[]> {
    return this._http.get<Empleado[]>(`${this._url}/employees`)
  }

  getEmployeesById(id: string): Observable<Empleado> {
    return this._http.get<Empleado>(`${this._url}/employee/${id}`)
  }

  createEmployee(empleado: Data): Observable<Data> {
    return this._http.post<Data>(`${this._url}/create`, empleado)
  }
}
