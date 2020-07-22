import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { AdvanceTableComponent } from './advance-table/advance-table.component';
import { GroupTableComponent } from './group-table/group-table.component';
import { ExportTableComponent } from './export-table/export-table.component';
import { ChildRowComponent } from './child-row/child-row.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { DatatablesComponent } from './datatables/datatables.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic-tables',
    pathMatch: 'full'
  },
  {
    path: 'basic-tables',
    component: BasicTableComponent
  },
  {
    path: 'advance-table',
    component: AdvanceTableComponent
  },
  {
    path: 'data-table',
    component: DatatablesComponent
  },
  {
    path: 'group-table',
    component: GroupTableComponent
  },
  {
    path: 'export-table',
    component: ExportTableComponent
  },
  {
    path: 'child-row-table',
    component: ChildRowComponent
  },
  {
    path: 'editable-table',
    component: EditableTableComponent
  },
  {
    path: 'ngx-datatable',
    component: NgxDatatableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
