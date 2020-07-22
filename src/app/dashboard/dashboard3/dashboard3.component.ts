import { Component, OnInit } from '@angular/core';

declare const $: any;
declare const Chart: any;

@Component({
	selector: 'app-dashboard3',
	templateUrl: './dashboard3.component.html',
	styleUrls: ['./dashboard3.component.scss']
})
export class Dashboard3Component implements OnInit {

	// Line chert start
	public lineChartOptions = {
		responsive: true,
		tooltips: {
			mode: 'index',
			titleFontSize: 12,
			titleFontColor: '#000',
			bodyFontColor: '#000',
			backgroundColor: '#fff',
			titleFontFamily: 'Poppins',
			bodyFontFamily: 'Poppins',
			cornerRadius: 3,
			intersect: false,
		},
		legend: {
			display: false,
			labels: {
				usePointStyle: true,
				fontFamily: 'Poppins',
			},
		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					display: false,
					drawBorder: false
				},
				scaleLabel: {
					display: false,
					labelString: 'Month'
				},
				ticks: {
					fontFamily: "Poppins",
					fontColor: "#9aa0ac", // Font Color
				}

			}],
			yAxes: [{
				display: true,
				gridLines: {
					display: false,
					drawBorder: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Value',
					fontFamily: "Poppins"

				},
				ticks: {
					fontFamily: "Poppins",
					fontColor: "#9aa0ac", // Font Color
				}
			}]
		},
		title: {
			display: false,
			text: 'Normal Legend'
		}
	};
	lineChartData = [
		{
			label: "Foods",
			data: [4, 20, 10, 70, 50, 63, 10],
			backgroundColor: 'transparent',
			borderColor: '#78CEFF',
			borderWidth: 3,
			pointStyle: 'circle',
			pointRadius: 4,
			pointBorderColor: 'transparent',
			pointBackgroundColor: '#78CEFF',
		},
		{
			label: "Electronics",
			data: [6, 40, 40, 20, 40, 79, 30],
			backgroundColor: 'transparent',
			borderColor: '#FFBE4E',
			borderWidth: 3,
			pointStyle: 'circle',
			pointRadius: 4,
			pointBorderColor: 'transparent',
			pointBackgroundColor: '#FFBE4E',
		}
	];

	lineChartLabels = ["2010", "2011", "2012", "2013", "2014", "2015", "2016"];

	// line chart END

	// start radar chart
	public radarChartLabels: string[] = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7'];

	public radarChartData: any = [
		{ data: [58, 60, 74, 78, 55, 64, 42], label: 'Series A' },
		{ data: [30, 45, 51, 22, 79, 35, 82], label: 'Series B' }
	];
	public radarChartType = 'radar';
	public radarChartColors: any[] = [
		{

			backgroundColor: ["rgba(109, 144, 232,0.8)"]
		},
		{
			backgroundColor: ["rgba(255, 140, 96,0.8)"]
		}
	];
	public radarChartOptions: any = {
		animation: false,
		responsive: true,
		scale: {
			ticks: {
				beginAtZero: true,
				fontFamily: "Poppins",
				fontColor: "#9aa0ac", // Font Color
			}
		}
	};
	// end radar chart

	constructor() { }

	ngOnInit() {

		'use strict';
		$(function () {
			initCharts();
		});
		/*************** TO DO **********************/
		'use strict';
		$(document).on('click', '.to-do-list .form-check-label .form-check-input', function () {
			$(this).parent('label').toggleClass('line-through');
		});
		$(document).on('click', '.todo-remove', function () {
			$(this).closest("li").remove();
			return false;
		});

		$(document).on('click', '.panel .tools .fa-times', function () {
			$(this).parents(".panel").parent().remove();
		});

		//Charts
		function initCharts() {
			//Chart Bar
			$('.chart.chart-bar').sparkline([6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5, 6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5], {
				type: 'bar',
				barColor: '#fff',
				negBarColor: '#fff',
				barWidth: '4px',
				height: '45px'
			});


			//Chart Pie
			$('.chart.chart-pie').sparkline([30, 35, 25, 8], {
				type: 'pie',
				height: '45px',
				sliceColors: ['rgba(255,255,255,0.70)', 'rgba(255,255,255,0.85)', 'rgba(255,255,255,0.95)', 'rgba(255,255,255,1)']
			});


			//Chart Line
			$('.chart.chart-line').sparkline([9, 4, 6, 5, 6, 4, 7, 3], {
				type: 'line',
				width: '60px',
				height: '45px',
				lineColor: '#fff',
				lineWidth: 1.3,
				fillColor: 'rgba(0,0,0,0)',
				spotColor: 'rgba(255,255,255,0.40)',
				maxSpotColor: 'rgba(255,255,255,0.40)',
				minSpotColor: 'rgba(255,255,255,0.40)',
				spotRadius: 3,
				highlightSpotColor: '#fff'
			});
		}


	}

}
