import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearComponent } from './pages/crear/crear.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { CrearReactivesComponent } from './pages/crear-reactives/crear-reactives.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'create', component: CrearComponent},
      {path: 'create-reactives', component: CrearReactivesComponent},
      {path: 'employees', component: ListadoComponent},
      {path: 'employee/:id', component: EmpleadoComponent},
      {path: '**', redirectTo: 'employee'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
