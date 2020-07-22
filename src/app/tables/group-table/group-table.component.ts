import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
	selector: 'app-group-table',
	templateUrl: './group-table.component.html',
	styleUrls: ['./group-table.component.scss']
})
export class GroupTableComponent implements OnInit {

	constructor() { }

	ngOnInit() {

		// #start# Group table
		var table = $('#tableGroup').DataTable({
			"columnDefs": [
				{ "visible": false, "targets": 2 }
			],
			"order": [[2, 'asc']],
			"scrollX": true,
			"displayLength": 25,
			"drawCallback": function (settings) {
				var api = this.api();
				var rows = api.rows({ page: 'current' }).nodes();
				var last = null;

				api.column(2, { page: 'current' }).data().each(function (group, i) {
					if (last !== group) {
						$(rows).eq(i).before(
							'<tr class="group"><td colspan="5">' + group + '</td></tr>'
						);

						last = group;
					}
				});
			}
		});

		// Order by the grouping
		$('#tableGroup tbody').on('click', 'tr.group', function () {
			var currentOrder = table.order()[0];
			if (currentOrder[0] === 2 && currentOrder[1] === 'asc') {
				table.order([2, 'desc']).draw();
			}
			else {
				table.order([2, 'asc']).draw();
			}
		});
	}

}
