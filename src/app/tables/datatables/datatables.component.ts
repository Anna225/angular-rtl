import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.sass']
})
export class DatatablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.js-basic-example').DataTable({
      responsive: true
    });

    $('.save-stage').DataTable({
      "scrollX": true,
      stateSave: true
    });

    var t = $('#example3').DataTable({
      "scrollX": true
    });
    var counter = 1;

    $('#addRow').on('click', function () {
      t.row.add([
        counter + '.1',
        counter + '.2',
        counter + '.3',
        counter + '.4',
        counter + '.5'
      ]).draw(false);

      counter++;
    });
  }

}
