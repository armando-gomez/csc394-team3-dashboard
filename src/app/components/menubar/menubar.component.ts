import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
	selector: 'app-menubar',
	templateUrl: './menubar.component.html',
	styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
	items: MenuItem[];

	@Output() toggleSideMenu = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() {
		this.items = [
			{
				id: 'sidemenu',
				command: e => this.openSideMenu(e),
				icon: "pi pi-bars",
				tabindex: "0"
			}
		];
	}

	openSideMenu(event) {
		this.toggleSideMenu.emit(true);
	}

}
