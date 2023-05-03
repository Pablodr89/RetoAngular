import { Component } from '@angular/core';

interface MenuItem {
  ruta: string
  nombre: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    {
      ruta: '/empleados/create',
      nombre: 'Crear empleado Template'
    },
    {
      ruta: '/empleados/create-reactives',
      nombre: 'Crear empleado Reactivo'
    },
    {
      ruta: '/empleados/employees',
      nombre: 'Listado de empleados'
    }
  ]
}
