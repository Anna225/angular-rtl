import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { GoogleComponent } from './google/google.component';
import { VectorComponent } from './vector/vector.component';
import { DatamapComponent } from './datamap/datamap.component';

@NgModule({
  declarations: [GoogleComponent, VectorComponent, DatamapComponent],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
