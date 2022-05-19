import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LobbyAuditoriumPageRoutingModule } from './lobby-auditorium-routing.module';

import { LobbyAuditoriumPage } from './lobby-auditorium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LobbyAuditoriumPageRoutingModule
  ],
  declarations: [LobbyAuditoriumPage]
})
export class LobbyAuditoriumPageModule {}
