import { Component, Input, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { ActivatedRoute } from '@angular/router';
import { Empleado, Datum } from '../../interfaces/empleados.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input() empleado!: Datum[]

  constructor(private activatedRoute: ActivatedRoute, private _empleadoService: EmpleadosService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this._empleadoService.getEmployeesById(id))
      )
      .subscribe(empleado =>
        this.empleado = empleado.data
        )
  }
}
