import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

declare const $: any;
@Component({
    selector: 'app-form-validations',
    templateUrl: './form-validations.component.html',
    styleUrls: ['./form-validations.component.scss']
})
export class FormValidationsComponent implements OnInit {

    registerForm: FormGroup;
    basicForm: FormGroup;
    submitted = false;

    signupForm: FormGroup;
    FirstName: string = "";
    LastName: string = "";
    Email: string = "";
    Password: string = "";

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        this.basicForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl(''),
        });


        'use strict';
        $(function () {
            //Advanced Form Validation
            $('#form_advanced_validation').validate({
                rules: {
                    'date': {
                        customdate: true
                    },
                    'creditcard': {
                        creditcard: true
                    }
                },
                highlight: function (input) {
                    $(input).parents('.form-line').addClass('error');
                },
                unhighlight: function (input) {
                    $(input).parents('.form-line').removeClass('error');
                },
                errorPlacement: function (error, element) {
                    $(element).parents('.form-group').append(error);
                }
            });

            //Custom Validations ===============================================================================
            //Date
            $.validator.addMethod('customdate', function (value, element) {
                return value.match(/^\d\d\d\d?-\d\d?-\d\d$/);
            },
                'Please enter a date in the format YYYY-MM-DD.'
            );

            //Credit card
            $.validator.addMethod('creditcard', function (value, element) {
                return value.match(/^\d\d\d\d?-\d\d\d\d?-\d\d\d\d?-\d\d\d\d$/);
            },
                'Please enter a credit card in the format XXXX-XXXX-XXXX-XXXX.'
            );
            //==================================================================================================
        });
    }


    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
}
