import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
declare const $: any;
@Component({
  selector: 'app-export-table',
  templateUrl: './export-table.component.html',
  styleUrls: ['./export-table.component.scss']
})
export class ExportTableComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {

    this.startScript();

  }

  async startScript() {
    await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip', 'buttons.html5', 'buttons.print').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }

  private loadData() {
    $('#tableExport').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    });
  }

}
