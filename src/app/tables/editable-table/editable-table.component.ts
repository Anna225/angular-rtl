import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
declare const $: any;
@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss']
})
export class EditableTableComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    'use strict';
    this.startScript();
  }

  async startScript() {
    await this.dynamicScriptLoader.load('editable-table').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }

  private loadData() {
    $('#mainTable').editableTableWidget();
  }

}

