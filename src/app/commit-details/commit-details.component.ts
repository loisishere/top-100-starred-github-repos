import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-commit-details',
  templateUrl: './commit-details.component.html',
  styleUrls: ['./commit-details.component.css']
})
export class CommitDetailsComponent {

	constructor(public service:AppService) { }

	ngOnInit() {

	}
	close(){
		this.service.commitList.next(null);
	}
}
