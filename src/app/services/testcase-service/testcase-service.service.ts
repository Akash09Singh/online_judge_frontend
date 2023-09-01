import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../User_service/helper';

@Injectable({
  providedIn: 'root',
})
export class TestcaseService {
  constructor(private http: HttpClient) {}

  getTestCaseByProblemId(problemId: any) {
    return this.http.get(baseUrl + 'testcases/problem/' + problemId);
  }

  deleteTestcase(testcaseId: any) {
    return this.http.delete(baseUrl + 'testcases/' + testcaseId);
  }

  saveTestcase(testcaseData: any) {
    return this.http.post(baseUrl + 'testcases/saveAll', testcaseData);
  }
}
