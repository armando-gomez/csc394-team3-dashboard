import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
	displaySideMenu = false;
	pageName = 'message';

	constructor() { }

	ngOnInit() {
	}

	openSideMenu() {
		this.displaySideMenu = true;
	}

	updateSideBarState() {
		this.displaySideMenu = false;
	}

}
