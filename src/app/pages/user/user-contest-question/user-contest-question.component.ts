import { Component, OnInit } from '@angular/core';
import { ProblemsService } from '../../../services/problem_service/problems.service';
import { ActivatedRoute } from '@angular/router';
import { Problem } from '../../../models/Problem';
import { ContestsService } from 'src/app/services/contest_service/contests.service';
import { SubmitProblemService } from 'src/app/services/submit_service/submit-problem.service';

@Component({
  selector: 'app-user-contest-question',
  templateUrl: './user-contest-question.component.html',
  styleUrls: ['./user-contest-question.component.css'],
})
export class UserContestQuestionComponent {
  baseUrl: string = 'http://13.232.115.69:8080/api/problems/contests/';
  contestProblem: Problem[] = [];
  contestDetail: any;
  acceptedQuestion: any;
  constructor(
    private problemService: ProblemsService,
    private route: ActivatedRoute,
    private contestService: ContestsService,
    private submitProblemService: SubmitProblemService
  ) {}
  ngOnInit(): void {
    const contestId = this.route.snapshot.paramMap.get('contestId');
    let contestQuestionUrl = this.baseUrl + contestId;
    this.getAllContestQuestion(contestQuestionUrl);
    this.getContestDetail(contestId);
    this.submitProblemService.questionAceepted.subscribe(
      (questionId: number) => {
        this.acceptedQuestion = questionId;
      }
    );
    console.warn('emmiter: ', this.acceptedQuestion);
  }

  getAllContestQuestion(url: string) {
    this.problemService.fetchAllContestQuestion(url).subscribe(
      (data) => {
        this.contestProblem = data;
        this.problemService.setContestFirstProblemId(data[0].id);
        this.problemService.setContestProblemCount(data.length);
        console.warn('problem count', data.length, typeof data.length);
        console.warn(
          'problem count',
          this.problemService.getContestProblemCount(),
          typeof this.problemService.getContestProblemCount()
        );
      },
      (error) => {
        console.error('Error fetching contest question details:', error);
      }
    );
  }

  getContestDetail(contestId: string | null) {
    this.contestService.getContestById(contestId).subscribe(
      (data) => {
        this.contestDetail = data;
        this.contestService.setContestTime(this.contestDetail.endTime);
      },
      (error) => {
        console.log(error);
        alert('something went wrong while fetching contest detail');
      }
    );
  }

  questionStatus() {
    if (this.acceptedQuestion != null && this.acceptedQuestion != 0) {
      return 'accepted-question';
    }
    return 'unaccepted-question';
  }
  questionTextStatus() {
    if (this.acceptedQuestion != null && this.acceptedQuestion != 0) {
      return 'accepted-text-color';
    }
    return 'unaccepted-text-color';
  }
}
