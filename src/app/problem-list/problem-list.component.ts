import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProblemsService } from '../services/problem_service/problems.service';
import { Problem } from '../models/Problem';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css'],
})
export class ProblemListComponent implements OnInit {
  /**
   *
   */
  problemsList: Problem[] = [];

  constructor(private problemService: ProblemsService) {}
  ngOnInit(): void {
    this.fetchAllProblem();
  }

  fetchAllProblem(): void {
    this.problemService.problems().subscribe(
      (data) => {
        this.problemsList = data;
      },
      (error) => {
        console.error('Error fetching problems details:', error);
      }
    );
  }
}
