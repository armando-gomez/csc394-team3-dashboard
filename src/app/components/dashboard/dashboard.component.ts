import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MenuItem } from "primeng/api";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	images: any[];
	displaySideMenu = false;
	pageName = 'home';

	constructor() {
	}

	ngOnInit() {
		this.images = [
			{
				"src": "image1"
			},
			{
				"src": "image2"
			},
			{
				"src": "image3"
			}
		];
	}

	openSideMenu(event) {
		this.displaySideMenu = event;
	}
}
