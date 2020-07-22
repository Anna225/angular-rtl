import { Component, OnInit } from '@angular/core';


declare const $: any;
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.js-basic-example').DataTable({
      responsive: true
    });

  }

}
