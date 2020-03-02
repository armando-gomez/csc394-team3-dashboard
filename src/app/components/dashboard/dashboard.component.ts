import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	images: any[];
	displaySideMenu = false;
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
