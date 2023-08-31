import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProblemByIdService } from '../../services/problemById_service/problem-by-id.service';
import { ActivatedRoute } from '@angular/router';
import { Problem } from 'src/app/models/Problem';
import { Submit } from 'src/app/models/Submit';
import { LoginService } from 'src/app/services/login_service/login.service';
import { SubmitProblemService } from 'src/app/services/submit_service/submit-problem.service';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-problem-decription',
  templateUrl: './problem-description.component.html',
  styleUrls: ['./problem-description.component.css'],
})
export class ProblemDecriptionComponent implements OnInit {
  /**
   *
   */

  problemDescription!: Problem;
  submit = new Submit();
  constructor(
    private problemByIdService: ProblemByIdService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private submitProblemService: SubmitProblemService
  ) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('problemId');
    this.getProblemById(id);
  }

  getProblemById(problemId: string | null): any {
    let url = 'http://13.232.115.69:8080/api/problems/' + problemId;
    this.problemByIdService.fetchProblemById(url).subscribe(
      (data) => {
        this.problemDescription = data;
        this.submit.code = this.problemDescription.boiler_code_cpp;
        this.submit.problemTitle = this.problemDescription.title;
        console.warn(data);
      },
      (error) => {
        console.error('Error fetching problems details:', error);
      }
    );
  }
  runCode() {
    let userId = this.loginService.getUserId();
    let problemId = this.route.snapshot.paramMap.get('problemId');
    let contestId = this.route.snapshot.paramMap.get('contestId');
    this.submit.userId = userId;
    this.submit.problemId = Number(problemId);
    this.submit.contestId = Number(contestId);
    this.submit.language = 'cpp';
    this.submitProblemService.submitProblem(this.submit).subscribe(
      (data: any) => {
        console.log(data);
        this.submissionStatus(data, Number(contestId), Number(problemId));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submissionStatus(data: any, contestId: number, problemId: number) {
    if (data.status == 'Accepted') {
      if (Number(contestId) != 0 || Number(contestId) != null) {
        this.submitProblemService.questionAceepted.emit(Number(problemId));
        this.submitProblemService.acceptedContestQuestion++;
      } else {
        this.submitProblemService.questionAceepted.emit(0);
      }
      console.warn('firer', data.status);
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        title: 'Accepted',
      });
    } else {
      this.submitProblemService.questionAceepted.emit(0);
      console.warn('firer', data.status);
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        title: 'Wrong Answer',
      });
    }
  }
}
