import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-examples',
  templateUrl: './form-examples.component.html',
  styleUrls: ['./form-examples.component.scss']
})
export class FormExamplesComponent implements OnInit {

  basicForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.basicForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      checkbox1: new FormControl(''),
    });


  }

  onSubmit(form: FormGroup) {
    // submit code write here
  }

}
