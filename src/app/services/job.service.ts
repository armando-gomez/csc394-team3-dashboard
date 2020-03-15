import { Injectable } from '@angular/core';
import { JobPost } from "../interfaces/job-post";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class JobService {

	constructor(
		private http: HttpClient,
		private authService: AuthService
	) { }

	public getAllJobPosts() {
		return this.http.get('jobposts/all');
	}
}
