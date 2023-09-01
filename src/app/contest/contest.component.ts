import { Component, OnInit } from '@angular/core';
import { ContestsService } from '../services/contest_service/contests.service';
import { Contest } from '../models/Contest';
import { ActivatedRoute, Router } from '@angular/router';
import { Problem } from '../models/Problem';
import baseUrl from '../services/User_service/helper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css'],
})
export class ContestComponent implements OnInit {
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
  deleteContest(contestId: any) {
    Swal.fire({
      title: 'Do you want to save the changes?',

      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.contestService.deleteContest(contestId).subscribe(
          (data) => {
            console.log(data);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Contest Deleted Successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(function () {
              console.log('waiting');
            }, 1500);
            window.location.reload();
          },
          (error) => {
            console.log(error);
            alert('error deleting contest');
          }
        );
      }
    });
  }
}
