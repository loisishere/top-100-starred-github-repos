import { Component } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

	constructor(public service:AppService) { }

	getMoreInfoOnCommitsForThisRepo(fullName:string){
		this.service.getCommitsFromTheLast24HoursBasedOnRepoSelected(fullName);
	}
}
