import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contest } from 'src/app/models/Contest';
import { Problem } from 'src/app/models/Problem';
import baseUrl from '../User_service/helper';

@Injectable({
  providedIn: 'root',
})
export class ContestsService {
  constructor(private http: HttpClient) {}
  fetchAllContest(url: string) {
    return this.http.get<Contest[]>(url);
  }
 

  createContest(contestData: any) {
    return this.http.post(baseUrl + 'contest', contestData);
  }

  getContestById(contestId:any){
    return this.http.get(baseUrl+'contest/'+contestId);
  }
  setContestName(contestName:string){
    localStorage.setItem('contestName', contestName);
  
}

  getContestName(){
    return localStorage.getItem('contestName');
  }

  setContestTime(contestTime:any){
    localStorage.setItem('contestTime',contestTime);
  }
  getContestTime(){
    return localStorage.getItem('contestTime');
  }
}
