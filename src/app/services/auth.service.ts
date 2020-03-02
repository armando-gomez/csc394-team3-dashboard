import { Injectable } from '@angular/core';
import { User } from "../interfaces/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	authToken: any;
	user: any;

	constructor(
		private http: HttpClient,
		private router: Router
	) {}

	public isLoggedIn() {
		return (localStorage.getItem('id_token') !== null);
	}

	public logout() {
		this.authToken = null;
		this.user = null;
		localStorage.clear();
	}

	public registerUser(user) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};
		return this.http.post('user/register', user, httpOptions).pipe(map(
			data => {
				return data;
			}
		));
	}

	public loginUser(user) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};
		return this.http.post('user/login', user, httpOptions).pipe(map(
			data => {
				return data;
			}
		));
	}

	public storeUser(token, user) {
		if (token == null || user == null) {
			this.router.navigate(['login']);
		} else {
			localStorage.setItem('id_token', token);
			localStorage.setItem('user', JSON.stringify(user));
			this.authToken = token;
			this.user = user;
		}
	}

	public loadToken() {
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}

	public getToken() {
		return this.authToken;
	}

	public getLoggedInUser() {
		if(this.user) {
			return this.user;
		}

		this.user = JSON.parse(localStorage.getItem('user'));
		this.authToken = localStorage.getItem('id_token');

		return this.user;
	}

}
