import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
{
    path:'identificacion',
    component : IdentificacionComponent
  },
  {
    path :'cambio-clave',
    component :CambioClaveComponent
  },{
    path: 'recuperar-calve',
    component : RecuperarClaveComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
