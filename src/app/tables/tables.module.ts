import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TablesRoutingModule } from './tables-routing.module';
import { ChildRowComponent } from './child-row/child-row.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { GroupTableComponent } from './group-table/group-table.component';
import { ExportTableComponent } from './export-table/export-table.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatablesComponent } from './datatables/datatables.component';
import { AdvanceTableComponent } from './advance-table/advance-table.component';

@NgModule({
  declarations: [ChildRowComponent, BasicTableComponent, GroupTableComponent, ExportTableComponent, EditableTableComponent, NgxDatatableComponent, DatatablesComponent, AdvanceTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TablesRoutingModule,
    NgxDatatableModule
  ]
})
export class TablesModule { }
