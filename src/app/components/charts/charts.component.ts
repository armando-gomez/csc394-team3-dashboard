import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
	displaySideMenu = false;
	displayDialog = false;
	pageName = 'charts';

	charts: SelectItem[];
	toggleChartSelect: string;

	selected: string = "highPay";

	constructor() { 
		this.charts = [
			{label: 'Change Chart', icon:'pi pi-chart-bar', value:'chart'}
		];
	}

	ngOnInit() {
	}

	openSideMenu() {
		this.displaySideMenu = true;
	}

	updateSideBarState() {
		this.displaySideMenu = false;
	}

	toggleDialog(event) {
		this.displayDialog = true;
	}

	selectChart(name) {
		this.selected = name;
	}


}
