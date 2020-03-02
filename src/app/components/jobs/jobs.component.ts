import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { JobPost } from "../../interfaces/job-post";
import * as sample from '../../sample.json';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
	jobs;
	displaySideMenu = false;
	pageName = 'jobs';

	constructor(
		private jobService: JobService
	) { }

	ngOnInit() {
		if(environment.production) {
			this.loadJobPosts();
		} else {
			this.jobs = (sample as any).default
		}
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

	openSideMenu(event) {
		this.displaySideMenu = event;
	}

	openLink(url) {
		window.open(url, "_blank");
	}

}
