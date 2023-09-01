import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProblemsService } from '../services/problem_service/problems.service';
import { Problem } from '../models/Problem';
import Swal from 'sweetalert2';

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
  response: any;

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

  deleteProblem(problemId: any) {
    Swal.fire({
      title: 'Do you want to delete the problem?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.problemService.deleteProblem(problemId).subscribe(
          (data: any) => {
            console.warn(data);
            if (data.response == 'deleted') {
              Swal.fire('Deleted!', '', 'success');
            } else {
              Swal.fire('Error!', '', 'info');
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }
}
