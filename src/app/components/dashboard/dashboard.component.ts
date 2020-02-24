import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MenuItem } from "primeng/api";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	items: MenuItem[];
	images: any[];
	displaySideMenu = false;

	@Output() toggled = new EventEmitter<boolean>();

	constructor() {
	}

	ngOnInit() {
		this.items = [
			{
				id: 'sidemenu',
				command: e => this.openSideMenu(e),
				icon: "pi pi-bars",
				tabindex: "0"
			}
		];

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

		console.log(this.images);
	}

	openSideMenu(event) {
		this.displaySideMenu = true;
	}
}
