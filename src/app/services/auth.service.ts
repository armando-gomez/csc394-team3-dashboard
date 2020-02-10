import { Injectable } from '@angular/core';
import { User } from "../interfaces/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'


@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private http: HttpClient
	) { }

	public isLoggedIn() {
		return localStorage.getItem('ACCESS_TOKEN') !== null;
	}

	public logout() {
		localStorage.removeItem('ACCESS_TOKEN');
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
}
