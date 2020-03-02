import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	displaySideMenu = false;
	pageName = 'profile';
	user;

	constructor(
		private authService: AuthService
	) { }

	ngOnInit() {
		this.user = this.authService.getLoggedInUser();
	}

	openSideMenu() {
		this.displaySideMenu = true;
	}
}
