import { Component, OnInit } from '@angular/core';
import { ContestsService } from '../../../services/contest_service/contests.service';
import { Contest } from '../../../models/Contest';
import { ActivatedRoute, Router } from '@angular/router';
import baseUrl from 'src/app/services/User_service/helper';

@Component({
  selector: 'app-user-contest',
  templateUrl: './user-contest.component.html',
  styleUrls: ['./user-contest.component.css'],
})
export class UserContestComponent implements OnInit {
  /**
   *
   */
  baseUrl: string = baseUrl + 'contest';
  contestData: Contest[] = [];

  constructor(
    private contestService: ContestsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAllContest();
  }

  getAllContest() {
    this.contestService.fetchAllContest(this.baseUrl).subscribe(
      (data) => {
        this.contestData = data;
      },
      (error) => {
        console.error('Error fetching contest details:', error);
      }
    );
  }
  startContest(contestName: string, contestId: number, contestEndTime: string) {
    this.contestService.setContestName(contestName);
    this.contestService.setContestTime(contestEndTime);
    console.warn(this.contestService.getContestName());
    this.router.navigate(['/user/contest/' + contestId]);
  }
}
