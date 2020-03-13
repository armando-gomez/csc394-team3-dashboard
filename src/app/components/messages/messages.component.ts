import { Component, OnInit } from '@angular/core';
import * as json from './messages.json';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
	inbox;
	displaySideMenu = false;
	pageName = 'message';

	constructor() { }

	ngOnInit() {
		this.inbox = (json as any).default;
	}

	openSideMenu() {
		this.displaySideMenu = true;
	}

	updateSideBarState() {
		this.displaySideMenu = false;
	}
}
