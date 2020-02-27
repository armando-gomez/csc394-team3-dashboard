import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { JobPost } from "../../interfaces/job-post";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from 'src/app/services/auth.service';


@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
	jobs: JobPost[];

	constructor(
		private jobService: JobService,
		private http: HttpClient,
		private authService: AuthService
	) { }

	ngOnInit() {
	}

	loadJobPosts() {
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': this.authService.getToken()
			})
		};
		this.http.get<JobPost>('job/all', httpOptions).subscribe(data => console.log(data));
	}

}
