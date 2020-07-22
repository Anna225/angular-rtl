import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    'use strict';

    $(document).ready(function () {
      $('.collapsible').collapsible();
    });


  }

}
