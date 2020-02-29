import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { AuthService } from 'src/app/services/auth.service';

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
		private authService: AuthService
	) { }

	ngOnInit() {
		this.items = [
			{
				id: 'sidemenu',
				command: e => this.openSideMenu(e),
				icon: "pi pi-bars",
				tabindex: "0"
			}
		];

		this.user = this.authService.getLoggedInUser();
	}

	openSideMenu(event) {
		this.toggleSideMenu.emit(true);
	}

}
