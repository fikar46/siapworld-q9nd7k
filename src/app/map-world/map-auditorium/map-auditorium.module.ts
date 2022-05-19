import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapAuditoriumPageRoutingModule } from './map-auditorium-routing.module';

import { MapAuditoriumPage } from './map-auditorium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapAuditoriumPageRoutingModule
  ],
  declarations: [MapAuditoriumPage]
})
export class MapAuditoriumPageModule {}
