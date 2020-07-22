import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
declare const $: any;
declare const Dropzone: any;
declare const M: any;
@Component({
	selector: 'app-advanced',
	templateUrl: './advanced.component.html',
	styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {

	constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

	ngOnInit() {
		'use strict';
		this.startScript();
	}


	async startScript() {
		await this.dynamicScriptLoader.load('form.min', 'bootstrap-colorpicker').then(data => {
			this.loadData();
		}).catch(error => console.log(error));
	}

	private loadData() {

		//autocomplete
		var elems = document.querySelector('.autocomplete');
		var instances = M.Autocomplete.init(elems);

		instances.updateData({
			"Apple": null,
			"Microsoft": null,
			"Google": 'https://placehold.it/250x250'
		});

		instances.open();


		$('.colorpicker').colorpicker();

		this.initBasicSelect();
		this.initGroupSelect();
		this.initImageSelect();

		//Masked Input ============================================================================================================================
		var $demoMaskedInput = $('.demo-masked-input');

		//Date
		$demoMaskedInput.find('.date').inputmask('dd/mm/yyyy', { placeholder: '__/__/____' });

		//Time
		$demoMaskedInput.find('.time12').inputmask('hh:mm t', { placeholder: '__:__ _m', alias: 'time12', hourFormat: '12' });
		$demoMaskedInput.find('.time24').inputmask('hh:mm', { placeholder: '__:__ _m', alias: 'time24', hourFormat: '24' });

		//Date Time
		$demoMaskedInput.find('.datetime').inputmask('d/m/y h:s', { placeholder: '__/__/____ __:__', alias: "datetime", hourFormat: '24' });

		//Mobile Phone Number
		$demoMaskedInput.find('.mobile-phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
		//Phone Number
		$demoMaskedInput.find('.phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });

		//Dollar Money
		$demoMaskedInput.find('.money-dollar').inputmask('99,99 $', { placeholder: '__,__ $' });
		//Euro Money
		$demoMaskedInput.find('.money-euro').inputmask('99,99 €', { placeholder: '__,__ €' });

		//IP Address
		$demoMaskedInput.find('.ip').inputmask('999.999.999.999', { placeholder: '___.___.___.___' });

		//Credit Card
		$demoMaskedInput.find('.credit-card').inputmask('9999 9999 9999 9999', { placeholder: '____ ____ ____ ____' });

		//Email
		$demoMaskedInput.find('.email').inputmask({ alias: "email" });

		//Serial Key
		$demoMaskedInput.find('.key').inputmask('****-****-****-****', { placeholder: '____-____-____-____' });
		//===========================================================================================================================================

		//Select2
		$(".select2").select2();

		$("#select2-search-hide").select2({
			minimumResultsForSearch: Infinity
		});

		$("#select2-rtl-multiple").select2({
			placeholder: "RTL Select",
			dir: "rtl"
		});

		$("#select2-max-length").select2({
			maximumSelectionLength: 2,
			placeholder: "Select only maximum 2 items"
		});

	}

	private initBasicSelect() {
		/* basic select start*/
		$('select').formSelect();
		$('#sel').formSelect();
		var data = [{ id: 1, name: "Option 1" }, { id: 2, name: "Option 2" }, { id: 3, name: "Option 3" }];

		var Options = "";
		$.each(data, function (i, val) {
			$('#sel').append("<option value='" + val.id + "'>" + val.name + "</option>");
			$('#sel').formSelect();
		});
		/* basic select end*/
	}
	private initGroupSelect() {
		/* With OptGroups select start*/
		$('#sel-grp').formSelect();
		var data_sel_grp = [{ id: 1, name: "Option 1" }, { id: 2, name: "Option 2" }, { id: 3, name: "Option 3" }];
		var data_sel_grp1 = [{ id: 4, name: "Option 11" }, { id: 5, name: "Option 21" }, { id: 6, name: "Option 31" }];

		var Options = "";
		$('#sel-grp').append("<optgroup label='Picnic'>");
		$.each(data_sel_grp, function (i, val) {

			$('#sel-grp').append("<option value='" + val.id + "'>" + val.name + "</option>");

			$('#sel-grp').formSelect();
		});
		$('#sel-grp').append("</optgroup >");

		$('#sel-grp').append("<optgroup label='Picnic1'>");
		$.each(data_sel_grp1, function (i, val) {

			$('#sel-grp').append("<option value='" + val.id + "'>" + val.name + "</option>");

			$('#sel-grp').formSelect();
		});
		$('#sel-grp').append("</optgroup >");
		/* With OptGroups select end*/
	}
	private initImageSelect() {
		/* select with image */
		$('#imgsel').formSelect();
		var data = [{ id: 1, name: "Option 1", url: "assets/images/user/user1.jpg" }, { id: 2, name: "Option 2", url: "assets/images/user/user2.jpg" }, { id: 3, name: "Option 3", url: "assets/images/user/user3.jpg" }];

		var Options = "";
		$.each(data, function (i, val) {
			$('#imgsel').append("<option value='" + val.id + "' data-icon='" + val.url + "'>" + val.name + "</option>");
			$('#imgsel').formSelect();
		});
		/* end select with image */
	}

}
