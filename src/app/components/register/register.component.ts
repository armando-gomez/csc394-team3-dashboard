import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
	isSubmitted = false;

	constructor(
		private authService: AuthService,
		private router: Router,
		private formBuilder: FormBuilder
	) { }

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			firstname: ['', Validators.required],
			lastname: ['', Validators.required],
			usertype: ['', Validators.required],
		});
	}

	get formControls() {
		return this.registerForm.controls;
	}

	register() {
		this.isSubmitted = true;
		if (this.registerForm.invalid) {
			return;
		}

		this.authService.registerUser(this.registerForm.value)
			.subscribe(
				data => {
					var register = JSON.parse(JSON.stringify(data));
					if (register.success == "true" || register.success == true) {
						this.authService.loginUser(register.user)
							.subscribe(
								data => {
									console.log(this.registerForm.value);
									var json = JSON.parse(JSON.stringify(data));
									this.authService.storeUser(json.token, json.user);
									// this.router.navigate(['dashboard']);
								}
							);
					}
				},
				err => {
					this.isSubmitted = false;
				}
			);
	}

}
