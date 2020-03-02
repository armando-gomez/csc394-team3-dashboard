import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	displaySideMenu = false;
	isSubmitted = false;
	pageName = 'profile';
	updateForm: FormGroup
	user;


	constructor(
		private authService: AuthService,
		private formBuilder: FormBuilder
	) { }

	ngOnInit() {
		this.user = this.authService.getLoggedInUser();
		this.updateForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			usertype: ['', Validators.required]
		});

		this.updateForm.setValue({email: this.user.email, password: "", usertype: this.user.usertype});
	}

	get formControls() {
		return this.updateForm.controls;
	}

	update() {
		this.isSubmitted = true;
		if(this.updateForm.invalid) {
			return;
		}

		const body = {
			oldEmail: this.user.email,
			formValue: this.updateForm.value
		};

		this.authService.updateUser(body)
			.subscribe(
				data => {
					console.log(data);
				},
				err => {
					console.log(err);
					this.isSubmitted = false;
				}
			);
	}

	openSideMenu() {
		this.displaySideMenu = true;
	}

	updateSideBarState() {
		this.displaySideMenu = false;
	}
}
