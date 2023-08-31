import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../User_service/helper';

@Injectable({
  providedIn: 'root'
})
export class SubmitContestService {

  constructor(private http:HttpClient) { }
  saveContest(contestData:any){
    return this.http.post(baseUrl+"user/submit-contest", contestData)
  }

  getUserContest(userId:number){
    return this.http.get(baseUrl+"user/contest/"+userId);
  }
}
