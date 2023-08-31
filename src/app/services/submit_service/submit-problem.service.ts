import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Submit } from 'src/app/models/Submit';
import baseUrl from '../User_service/helper';

@Injectable({
  providedIn: 'root',
})
export class SubmitProblemService {
  acceptedContestQuestion:number=0;
  questionAceepted:EventEmitter<number>=new EventEmitter<number>();

  constructor(private http: HttpClient) {}
  submitProblem(submissionData: Submit) {
    return this.http.post(baseUrl + 'submissions', submissionData);
  }

  getAllUserSubmission(userId:number){
    return this.http.get(baseUrl+"submissions/user/"+userId);
  }
}
