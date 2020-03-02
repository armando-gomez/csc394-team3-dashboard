import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menubar',
	templateUrl: './menubar.component.html',
	styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
	@Output() toggleSideMenu = new EventEmitter<boolean>();

	items: MenuItem[];
	user;

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit() {
		this.items = [
			{
				id: 'sidemenu',
				command: e => this.openSideMenu(),
				icon: "pi pi-bars",
				tabindex: "0"
			}
		];

		this.user = this.authService.getLoggedInUser();
	}

	openSideMenu() {
		this.toggleSideMenu.emit();
	}

	openProfile() {
		if (!this.user) {
			this.user = this.authService.getLoggedInUser();
		}
		var profile_id = this.user.firstname + this.user.lastname;
		this.router.navigate(['profile', profile_id]);
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['landing']);
	}
}
