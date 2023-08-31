import { Component, OnInit } from '@angular/core';
import { ContestsService } from '../services/contest_service/contests.service';
import { Contest } from '../models/Contest';
import { ActivatedRoute, Router } from '@angular/router';
import { Problem } from '../models/Problem';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css'],
})
export class ContestComponent implements OnInit {
  /**
   *
   */
  baseUrl: string = 'http://localhost:8080/api/contest';
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
}
