import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { JobPost } from "../../interfaces/job-post";

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
	jobs;

	constructor(
		private jobService: JobService
	) { }

	ngOnInit() {
		this.loadJobPosts();
	}

	loadJobPosts() {
		this.jobService.getAllJobPosts()
			.subscribe(
				data => {
					this.jobs = data;
				},
				err => {
					console.log(err);
				}
			);
	}

}
