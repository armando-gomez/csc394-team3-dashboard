import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	image;
	displaySideMenu = false;
	user;
	pageName = 'dashboard';

	constructor(
		private authService: AuthService,
		private router: Router
	) {
	}

	ngOnInit() {
		if(!this.authService.isLoggedIn()) {
			this.router.navigate(['login']);
		}
		this.user = this.authService.getLoggedInUser();

		if(this.user.usertype === "job") {
			this.image = "job";
		} else if(this.user.usertype === "hr") {
			this.image = "hr";
		} else if(this.user.usertype === "mgmt") {
			this.image = "mgmt";
		} else if(this.user.usertype === "wp") {
			this.image = "wp";
		}
	}

	openSideMenu() {
		this.displaySideMenu = true;
	}

	updateSideBarState() {
		this.displaySideMenu = false;
	}
}
