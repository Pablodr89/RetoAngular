import { Component, OnInit } from '@angular/core';
import { Empleado, Datum } from '../../interfaces/empleados.interface';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  empleados: Empleado[] = []

  constructor(private _empleadoService: EmpleadosService) {

  }

  ngOnInit(): void {
    this._empleadoService.getEmployees().subscribe(
      empleados => {
        this.empleados = empleados['data']
      })
  }
}
