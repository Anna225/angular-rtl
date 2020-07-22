import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.sass']
})
export class NgxDatatableComponent implements OnInit {

  cols = [{ name: 'First Name' }, { name: 'Last Name' }, { name: 'Address' }];
  data = [];
  filteredData = [];


  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor() { }

  ngOnInit() {

    this.fetch((data) => {
      this.data = data;
      // copy over dataset to empty object
      this.filteredData = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/ngx-data.json');

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }


  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    let colsAmt = this.cols.length;
    // get the key names of each column in the dataset
    let keys = Object.keys(this.filteredData[0]);
    // assign filtered matches to the active datatable
    this.data = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
        // check for a match
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
          // found match, return true to add to result set
          return true;
        }
      }
    });
    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


}
