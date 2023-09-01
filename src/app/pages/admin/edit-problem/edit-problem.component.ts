import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Problem } from 'src/app/models/Problem';
import { ProblemByIdService } from 'src/app/services/problemById_service/problem-by-id.service';
import { ProblemsService } from 'src/app/services/problem_service/problems.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-problem',
  templateUrl: './edit-problem.component.html',
  styleUrls: ['./edit-problem.component.css'],
})
export class EditProblemComponent implements OnInit {
  question = new Problem();
  problemId: any;

  constructor(
    private problemService: ProblemsService,
    private problemByIdService: ProblemByIdService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.problemId = this.activatedRoute.snapshot.paramMap.get('problemId');
    this.problemByIdService
      .fetchProblemById(Number(this.problemId).toString())
      .subscribe((data) => {
        this.question = data;
      });
  }
  formSubmit() {
    this.problemService.editProblem(this.problemId, this.question).subscribe(
      (data: any) => {
        console.warn(data);

        Swal.fire('Question saved successfully', '', 'success');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
