import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
declare const tinymce: any;

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    'use strict';
    this.startScript();
  }
  async startScript() {
    await this.dynamicScriptLoader.load('tinymce').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }


  private loadData() {
    tinymce.init({
      selector: 'textarea#tinymce1',
      theme: "modern",
      height: 300,
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools'
      ],

    });
  }
}
