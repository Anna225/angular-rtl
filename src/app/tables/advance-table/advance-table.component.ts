import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';

declare const $: any;
declare const M: any;

@Component({
  selector: 'app-advance-table',
  templateUrl: './advance-table.component.html',
  styleUrls: ['./advance-table.component.sass']
})
export class AdvanceTableComponent implements OnInit {

  @ViewChild('roleTemplate', { static: true }) roleTemplate: TemplateRef<any>;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  rows = [];
  selectedName: string = "";
  formData = [];
  imgPath: string = "";
  selectedRowData: selectRowInterface;
  newUserImg = "assets/images/user/user1.jpg";


  columns = [
    { name: 'First Name' }, { name: 'Last Name' }, { name: 'Gender' }, { name: 'Phone' }, { name: 'Email' }, { name: 'Address' }
  ];

  allColumns = [{ name: 'First Name' }, { name: 'Last Name' }, { name: 'Gender' }, { name: 'Phone' }, { name: 'Email' }, { name: 'Address' }];


  data = [];
  filteredData = [];
  basicForm: FormGroup;

  addRowForm: FormGroup;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService, private fb: FormBuilder) {

    this.basicForm = this.fb.group({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl()
    });

    this.addRowForm = this.fb.group({
      id: new FormControl(),
      img: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      address: new FormControl()
    });
  }

  ngOnInit() {
    $('select').formSelect();
    this.fetch((data) => {
      this.data = data;
      // copy over dataset to empty object
      this.filteredData = data;
    });
  }

  editRow(row) {
    this.basicForm.patchValue({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
      phone: row.phone,
      email: row.email,
      address: row.address,
      img: row.img
    });
    this.selectedRowData = row;

    M.updateTextFields();
  }

  addRow() {
    this.addRowForm.patchValue({
      id: this.getId(10, 100),
      img: this.newUserImg
    });
    M.updateTextFields();
  }


  deleteRow(row) {
    // console.log(row.id);
    this.data = this.arrayRemove(this.data, row.id)
    this.showNotification("bg-red", "Delete Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
  }

  arrayRemove(array, id) {
    return array.filter(function (element) {
      return element.id != id;
    });

  }

  onEditSave(form: FormGroup) {
    this.data = this.data.filter((value, key) => {
      if (value.id == form.value.id) {
        value.firstName = form.value.firstName;
        value.lastName = form.value.lastName;
        value.phone = form.value.phone;
        value.email = form.value.email;
        value.address = form.value.address;
      }
      $('#editModal').modal('hide');

      return true;
    });
    this.showNotification("bg-black", "Edit Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
  }

  onAddRowSave(form: FormGroup) {
    this.data.push(form.value);
    this.data = [...this.data];
    // console.log(this.data);
    form.reset();
    $('#addModal').modal('hide');
    this.showNotification("bg-green", "Add Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/adv-tbl-data.json');

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
    let colsAmt = this.columns.length;
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

  getId(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  showNotification(colorName, text, placementFrom, placementAlign, animateEnter, animateExit) {
    if (colorName === null || colorName === '') { colorName = 'bg-black'; }
    if (text === null || text === '') { text = 'Turning standard Bootstrap alerts'; }
    if (animateEnter === null || animateEnter === '') { animateEnter = 'animated fadeInDown'; }
    if (animateExit === null || animateExit === '') { animateExit = 'animated fadeOutUp'; }
    var allowDismiss = true;

    $.notify({
      message: text
    },
      {
        type: colorName,
        allow_dismiss: allowDismiss,
        newest_on_top: true,
        timer: 1000,
        placement: {
          from: placementFrom,
          align: placementAlign
        },
        animate: {
          enter: animateEnter,
          exit: animateExit
        },
        template: '<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' + (allowDismiss ? "p-r-35" : "") + '" role="alert">' +
          '<span data-notify="icon"></span> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }
}

export interface selectRowInterface {
  img: String;
  firstName: String;
  lastName: String;
}