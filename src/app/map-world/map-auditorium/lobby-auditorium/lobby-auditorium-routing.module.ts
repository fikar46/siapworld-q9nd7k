import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyAuditoriumPage } from './lobby-auditorium.page';

const routes: Routes = [
  {
    path: '',
    component: LobbyAuditoriumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LobbyAuditoriumPageRoutingModule {}
