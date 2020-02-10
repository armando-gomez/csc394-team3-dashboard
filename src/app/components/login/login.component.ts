import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "../../interfaces/user";
import { AuthService } from "../../services/auth.service";


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	isSubmitted = false;


	constructor(
		private authService: AuthService,
		private router: Router,
		private formBuilder: FormBuilder
	) {

	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get formControls() {
		return this.loginForm.controls;
	}

	login() {
		this.isSubmitted = true;
		if(this.loginForm.invalid) {
			return;
		}

		this.authService.loginUser(this.loginForm.value)
		.subscribe(
			data => {
				var json = JSON.parse(JSON.stringify(data));
				this.authService.storeUser(json.token, json.user);
			},
			err => {
				this.isSubmitted = false;
			}
		);;
		this.router.navigateByUrl('/dashboard');
	}

}
