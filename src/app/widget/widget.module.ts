import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { DataWidgetComponent } from './data-widget/data-widget.component';
import { MorrisJsModule } from 'angular-morris-js';

@NgModule({
  declarations: [ChartWidgetComponent, DataWidgetComponent],
  imports: [
    CommonModule,
    WidgetRoutingModule,
    MorrisJsModule
  ]
})
export class WidgetModule { }
