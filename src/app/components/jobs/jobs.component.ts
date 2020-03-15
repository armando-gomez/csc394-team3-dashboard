import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { JobPost } from "../../interfaces/job-post";

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
	jobsData;
	totalJobs;
	displayJobs;
	displaySideMenu = false;
	dataLoaded = false;
	pageName = 'jobs';
	rowsPerPage = 15;

	constructor(
		private jobService: JobService
	) { }

	ngOnInit() {
		this.getJobData();
	}

	getJobData() {
		this.jobService.getAllJobPosts()
			.subscribe(
				data => {
					this.jobsData = data;
					this.totalJobs = this.jobsData.length;
					this.displayJobs = this.jobsData.slice(0, this.rowsPerPage);
				},
				err => {
					console.log(err);
				}
			);
	}

	paginate(event) {
		this.displayJobs = this.jobsData.slice(event.first, event.first + event.rows);
	}

	openSideMenu() {
		this.displaySideMenu = true;
	}

	updateSideBarState() {
		this.displaySideMenu = false;
	}

	openLink(url) {
		window.open(url, "_blank");
	}

}
