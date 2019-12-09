import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { RepositoriesModel } from './models/models';

@Injectable({providedIn: 'root'})
export class AppService {
	constructor(private httpClient: HttpClient) { }
	
	public repositoriesList:BehaviorSubject<RepositoriesModel> = new BehaviorSubject<RepositoriesModel>(null);
	public commitList:BehaviorSubject<any> = new BehaviorSubject<any>(null);
	public commitListRepoName:string;

	async getListOfTop100StarredRepositories(){
		try{
		let list = await this.httpClient.get<RepositoriesModel>('http://api.github.com/search/repositories?page=1&per_page=100&q=stars%3A>%3D3500&type=Repositories').toPromise();
		this.repositoriesList.next(list);
		}catch(error){
			console.error(error);
		}

	}

	async getCommitsFromTheLast24HoursBasedOnRepoSelected(fullNameOfRepo:string){
		const TODAY:Date = new Date();
		const YESTERDAY:Date = new Date(TODAY.setDate(TODAY.getDate() - 1));
		let headers = new HttpHeaders({'Accept':'application/vnd.github.cloak-preview'});
		try{
			let list = await this.httpClient.get<any>(`http://api.github.com/search/commits?q=repo:${fullNameOfRepo}+committer-date%3A>%3D${YESTERDAY.getFullYear()}-${YESTERDAY.getMonth() + 1}-${YESTERDAY.getDate() > 9 ? YESTERDAY.getDate() : '0' + YESTERDAY.getDate()}`,{headers}).toPromise();
			this.commitList.next(list);
			this.commitListRepoName = fullNameOfRepo.split('/')[1];
		}catch(error){
			console.error(error);
		}
		
	}
}