import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from '../../models/Problem';

@Injectable({
  providedIn: 'root',
})
export class ProblemByIdService {
  constructor(private http: HttpClient) {}

  fetchProblemById(url: string) {
    return this.http.get<Problem>(url);
  }
}
