import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login_service/login.service';
import { SubmitContestService } from 'src/app/services/submit_service/submit-contest.service';

@Component({
  selector: 'app-user-contest-submissions',
  templateUrl: './user-contest-submissions.component.html',
  styleUrls: ['./user-contest-submissions.component.css'],
})
export class UserContestSubmissionsComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private submitContestservice: SubmitContestService
  ) {}
  user: any;
  contests: any;
  ngOnInit(): void {
    this.user = this.loginService.getUserId();
    this.submitContestservice.getUserContest(this.user).subscribe(
      (data) => {
        this.contests = data;
        console.warn(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
