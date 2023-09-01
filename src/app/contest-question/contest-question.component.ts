import { Component, OnInit } from '@angular/core';
import { ProblemsService } from '../services/problem_service/problems.service';
import { ActivatedRoute } from '@angular/router';
import { Problem } from '../models/Problem';
import baseUrl from '../services/User_service/helper';

@Component({
  selector: 'app-contest-question',
  templateUrl: './contest-question.component.html',
  styleUrls: ['./contest-question.component.css'],
})
export class ContestQuestionComponent implements OnInit {
  /**
   *
   */
  baseUrl: string = baseUrl + 'problems/contests/';
  contestProblem: Problem[] = [];
  constructor(
    private problemService: ProblemsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const contestId = this.route.snapshot.paramMap.get('contestId');
    let contestQuestionUrl = this.baseUrl + contestId;
    this.getAllContestQuestion(contestQuestionUrl);
  }
  getAllContestQuestion(url: string) {
    this.problemService.fetchAllContestQuestion(url).subscribe(
      (data) => {
        this.contestProblem = data;
      },
      (error) => {
        console.error('Error fetching contest question details:', error);
      }
    );
  }
}
