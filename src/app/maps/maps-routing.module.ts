import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleComponent } from './google/google.component';
import { VectorComponent } from './vector/vector.component';
import { DatamapComponent } from './datamap/datamap.component';

const routes: Routes = [

  {
    path: 'google',
    component: GoogleComponent
  },
  {
    path: 'vector',
    component: VectorComponent
  },
  {
    path: 'datamap',
    component: DatamapComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
