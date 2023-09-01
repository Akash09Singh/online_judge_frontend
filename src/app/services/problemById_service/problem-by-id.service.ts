import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from '../../models/Problem';
import baseUrl from '../User_service/helper';

@Injectable({
  providedIn: 'root',
})
export class ProblemByIdService {
  constructor(private http: HttpClient) {}

  fetchProblemById(problemId: any) {
    return this.http.get<Problem>(baseUrl + 'problems/' + problemId);
  }
}
