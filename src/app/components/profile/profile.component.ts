import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	displaySideMenu = false;
	pageName = 'profile';

	constructor() { }

	ngOnInit() {
	}

	openSideMenu(event) {
		this.displaySideMenu = event;
	}
}
