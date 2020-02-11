import { Injectable } from '@angular/core';
import { User } from "../interfaces/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	authToken: any;
	user: any;

	constructor(
		private http: HttpClient,
	) { }

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
		return this.http.post('api/register', user, httpOptions).pipe(map(
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
		return this.http.post('api/login', user, httpOptions).pipe(map(
			data => {
				return data;
			}
		));
	}

	public storeUser(token, user) {
		localStorage.setItem('id_token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.authToken = token;
		this.user = user;
	}

	public loadToken() {
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}

	
}
