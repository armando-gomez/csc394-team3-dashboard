import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html',
	styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
	jobs: any[];

	constructor(
		private jobService: JobService
	) { }

	ngOnInit() {
	}

	loadJobPosts() {
		this.jobService.getAllJobPosts()
			.subscribe(
				data => {
					console.log(data);
				},
				err => {
					console.log(err);
				}
			);
	}

}
