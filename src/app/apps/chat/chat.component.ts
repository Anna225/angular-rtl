import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		'use strict';
		$(function () {
			$('#chat_user').slimscroll({
				height: '590px',
				size: '5px'
			});
		});

		$(function () {
			$('#chat-conversation').slimscroll({
				height: '449px',
				size: '5px'
			});
		});
	}

}
