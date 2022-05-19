import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapWorldPage } from './map-world.page';

const routes: Routes = [
  {
    path: ':city',
    component: MapWorldPage
  },
  {
    path: ':city/auditorium',
    loadChildren: () => import('./map-auditorium/map-auditorium.module').then( m => m.MapAuditoriumPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapWorldPageRoutingModule {}
