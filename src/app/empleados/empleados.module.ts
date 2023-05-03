import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrearReactivesComponent } from './pages/crear-reactives/crear-reactives.component';


@NgModule({
  declarations: [
    EmpleadoComponent,
    ListadoComponent,
    CrearComponent,
    CrearReactivesComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmpleadosModule { }
