import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	images: any[];
	displaySideMenu = false;
	pageName = 'dashboard';

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

	openSideMenu() {
		this.displaySideMenu = true;
	}

	updateSideBarState() {
		this.displaySideMenu = false;
	}
}
