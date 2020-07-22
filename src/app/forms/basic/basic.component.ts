import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormGroup, FormControl } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';

declare const $: any;
declare const M: any;
declare const flatpickr: any;

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  basicForm: FormGroup;
  floatingForm: FormGroup;
  diffWidthForm: FormGroup;

  // dragdrop file upload
  public config: DropzoneConfigInterface = {
    url: 'https://example.com/post',    //Change your upload url
    maxFiles: 10,
    clickable: true,
    uploadMultiple: true,
    acceptedFiles: 'image/*',
    createImageThumbnails: true
  };

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.basicForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    this.floatingForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    this.diffWidthForm = new FormGroup({
      col1: new FormControl(''),
      col2: new FormControl(''),
      col3: new FormControl(''),
      col4: new FormControl(''),
      disableField: new FormControl({ value: '', disabled: true }),
    });

    this.startScript();

    // for labels overlapping prefilled content on floating label textitem
    M.updateTextFields();
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('username', form.value.username);
    console.log('password', form.value.password);
  }
  async startScript() {
    await this.dynamicScriptLoader.load('form.min').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }
  private loadData() {

    //flatpicker date and time picker 
    flatpickr("#myDatePicker", {
      "dateFormat": "n/j/Y",
      "allowInput": true,
      "onOpen": function (selectedDates, dateStr, instance) {
        instance.setDate(instance.input.value, false);
      }
    });
    flatpickr("#myDateTimePicker", {
      "dateFormat": "n/j/Y H:i",
      "enableTime": true,
      "allowInput": true
    });
    flatpickr("#myTimePicker", {
      "dateFormat": "H:i",
      "enableTime": true,
      "allowInput": true,
      "noCalendar": true
    });
    flatpickr("#myDateRange", {
      mode: "range",
      minDate: "today",
      dateFormat: "Y-m-d",
      disable: [
        function (date) {
          // disable every multiple of 8
          return !(date.getDate() % 8);
        }
      ]
    });
    flatpickr("#myMultiSelectDate", {
      mode: "multiple",
      dateFormat: "Y-m-d",
      defaultDate: ["2019-10-20", "2019-11-04"]
    });
    flatpickr("#myDisableDate", {
      disable: ["2019-08-30", "2019-09-21", "2019-10-08", new Date(2025, 4, 9)],
      dateFormat: "Y-m-d",
    });


    //Datetimepicker plugin
    $('.datetimepicker').bootstrapMaterialDatePicker({
      format: 'dddd DD MMMM YYYY - HH:mm',
      clearButton: true,
      weekStart: 1
    });

    $('.datepicker').bootstrapMaterialDatePicker({
      format: 'dddd DD MMMM YYYY',
      clearButton: true,
      weekStart: 1,
      time: false
    });
    $('.datepicker2').bootstrapMaterialDatePicker({
      format: 'DD MMMM YYYY',
      clearButton: true,
      weekStart: 1,
      time: false
    });

    $('.timepicker').bootstrapMaterialDatePicker({
      format: 'HH:mm',
      clearButton: true,
      date: false
    });

    $('input#input_text, textarea#textarea2').characterCounter();

  }

}
