import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from '../../models/Problem';
import baseUrl from '../User_service/helper';

@Injectable({
  providedIn: 'root',
})
export class ProblemsService {
  backEndUrl: string = baseUrl + 'problems';
  constructor(private http: HttpClient) {}

  problems() {
    return this.http.get<Problem[]>(this.backEndUrl);
  }
  fetchAllContestQuestion(url: string) {
    return this.http.get<Problem[]>(url);
  }
  saveAllProblem(contestQuestions: Problem[]) {
    console.log('problem service save all problem method is being called');
    return this.http.post(this.backEndUrl + '/saveAll', contestQuestions);
  }

  deleteProblem(problemId: any) {
    return this.http.delete(this.backEndUrl + '/' + problemId);
  }

  editProblem(problemId: any, problemData: any) {
    return this.http.put(this.backEndUrl + '/' + problemId, problemData);
  }

  setContestFirstProblemId(problemId: any) {
    localStorage.setItem('contestFirstProblemId', problemId);
  }

  getContestFirstProblemId() {
    return localStorage.getItem('contestFirstProblemId');
  }

  setContestProblemCount(contestQuestionCount: any) {
    localStorage.setItem('contestQuestionCount', contestQuestionCount);
  }

  getContestProblemCount() {
    return localStorage.getItem('contestQuestionCount');
  }
}
