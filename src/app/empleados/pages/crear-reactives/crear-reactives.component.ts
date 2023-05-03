import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado, Datum, EmpleadoNuevo, Data } from '../../interfaces/empleados.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-reactives',
  templateUrl: './crear-reactives.component.html',
  styleUrls: ['./crear-reactives.component.css']
})
export class CrearReactivesComponent implements OnInit {

  miForm: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
    salary: ['', [Validators.required]],
    age: ['', [Validators.required]]
  })

  get values() {
    return this.miForm.value
  }

  constructor(private _empleadoService: EmpleadosService, private _router: Router, private _fb: FormBuilder) {

  }

  ngOnInit(): void {

  }

  campoValido(campo: string) {
    return this.miForm.controls[campo].invalid && this.miForm.controls[campo].touched
  }

  guardar() {
    if(this.miForm.invalid) {
      this.miForm.markAllAsTouched()//antes de mandar toca todos los campos
      return
    }
    
    this._empleadoService.createEmployee(this.miForm.value).subscribe(
      empleado => {
        console.log(empleado)
        this._router.navigate(['/empleados/employee/', empleado['data'].id])
      }
    )
  }
}
