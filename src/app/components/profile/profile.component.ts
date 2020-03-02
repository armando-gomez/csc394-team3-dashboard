import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
		private formBuilder: FormBuilder,
		private router: Router
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

		this.authService.updateUser(this.updateForm.value, this.user.email)
			.subscribe(
				data => {
					var json = JSON.parse(JSON.stringify(data));
					this.authService.storeUser(json.token, json.user);
					this.router.navigate(['dashboard']);
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
