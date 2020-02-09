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
			email: ['', Validators.required],
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
		if(this.registerForm.invalid) {
			return;
		}
	}

}
