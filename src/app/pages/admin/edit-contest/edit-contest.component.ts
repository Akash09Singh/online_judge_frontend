import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContestsService } from 'src/app/services/contest_service/contests.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-contest',
  templateUrl: './edit-contest.component.html',
  styleUrls: ['./edit-contest.component.css'],
})
export class EditContestComponent implements OnInit {
  constructor(
    private contestService: ContestsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  contestData = {
    title: '',
    endTime: '',
  };
  contestId: any;
  ngOnInit(): void {
    this.contestId = this.activatedRoute.snapshot.paramMap.get('contestId');
    this.contestService
      .getContestById(this.contestId)
      .subscribe((data: any) => {
        this.contestData = data;
      });
  }

  formSubmit() {
    this.contestService.editContest(this.contestData).subscribe(
      (data) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        console.log(error);
        alert('could not save changes');
      }
    );
    this.router.navigate(['/admin/view-all-contest']);
  }
}
