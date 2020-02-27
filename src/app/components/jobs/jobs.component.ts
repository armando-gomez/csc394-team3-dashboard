import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { JobPost } from "../../interfaces/job-post";

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
	jobs: JobPost[];

	constructor(
		private jobService: JobService
	) { }

	ngOnInit() {
	}

	loadJobPosts() {
		this.jobService.getAllJobPosts().subscribe((data: JobPost) => console.log(data));
	}

}
