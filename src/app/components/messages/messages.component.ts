import { Component, OnInit } from '@angular/core';
import * as json from './messages.json';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
	inbox;
	displaySideMenu = false;
	pageName = 'message';

	displayCompose = false;
	message;
	to: string;
	messageForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder
	) { }

	ngOnInit() {
		this.messageForm = this.formBuilder.group({
			to: [''],
			subject: [''],
			body: ['']
		});
		this.inbox = (json as any).default;
	}

	get formControls() {
		return this.messageForm.controls;
	}

	openSideMenu() {
		this.displaySideMenu = true;
	}

	updateSideBarState() {
		this.displaySideMenu = false;
	}

	composeMessage(message) {
		this.displayCompose = true
		this.message = message;
	}

	sendMessage() {
		console.log(this.messageForm.value);
	}
}
