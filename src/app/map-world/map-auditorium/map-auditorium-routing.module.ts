import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapAuditoriumPage } from './map-auditorium.page';

const routes: Routes = [
  {
    path: '',
    component: MapAuditoriumPage
  },
  {
    path: 'lobby',
    loadChildren: () => import('./lobby-auditorium/lobby-auditorium.module').then( m => m.LobbyAuditoriumPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapAuditoriumPageRoutingModule {}
