import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $('.categories a').click(function (e) {
        $('.categories ul li').removeClass('active');
        $(this).parent('li').addClass('active');
        var itemSelected = $(this).attr('data-filter');
        $('.portfolio-item').each(function () {
          if (itemSelected == '*') {
            $(this).removeClass('filtered').removeClass('selected');
            return;
          } else if ($(this).is(itemSelected)) {
            $(this).removeClass('filtered').addClass('selected');
          } else {
            $(this).removeClass('selected').addClass('filtered');
          }
        });
      });
    });
  }

}
