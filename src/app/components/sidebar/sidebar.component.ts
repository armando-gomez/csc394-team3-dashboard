import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	@Input() showSideBar: boolean;
	@Input() page: string;

	@Output() sideBarState = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() {
	}

	sidebarHide() {
		this.sideBarState.emit(false);
	}
}
