import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login_service/login.service';
import { SubmitProblemService } from 'src/app/services/submit_service/submit-problem.service';

@Component({
  selector: 'app-user-problem-submission',
  templateUrl: './user-problem-submission.component.html',
  styleUrls: ['./user-problem-submission.component.css'],
})
export class UserProblemSubmissionComponent implements OnInit {
  constructor(
    private submitProblemService: SubmitProblemService,
    private loginService: LoginService
  ) {}
  submissions: any;
  user: any;
  ngOnInit(): void {
    this.user = this.loginService.getUser();
    this.submitProblemService.getAllUserSubmission(this.user.id).subscribe(
      (data) => {
        this.submissions = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
