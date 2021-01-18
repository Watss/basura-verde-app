import { PointService } from './../../services/point.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PointsPageRoutingModule } from './points-routing.module';

import { PointsPage } from './points.page';
import { ListpointsComponent } from 'src/app/components/listpoints/listpoints.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PointsPageRoutingModule,
  ],
  declarations: [PointsPage, ListpointsComponent]
})
export class PointsPageModule {
  constructor(){}
}
