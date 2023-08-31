import { Component, OnInit } from '@angular/core';
import { Problem } from '../../../models/Problem';
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemsService } from 'src/app/services/problem_service/problems.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  contestQuestions: Problem[] = [];
  question = new Problem();
  count: number = 1;
  contestId: string | null = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private problemService: ProblemsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.contestId = this.activatedRoute.snapshot.paramMap.get('contestId');
    this.question = new Problem(); // Initialize the question here
    this.question.contestId = Number(this.contestId);
    this.contestQuestions.push(this.question);
  }

  addQuestion() {
    this.count += 1;
    this.question = new Problem();
    this.question.contestId = Number(this.contestId);
    this.contestQuestions.push(this.question);
  }

  formSubmit() {
    this.problemService.saveAllProblem(this.contestQuestions).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'Questions saved Successfully', 'success');
        if (this.question.contestId == 0) {
          this.router.navigate(['admin/view-all-problem']);
        } else {
          this.router.navigate(['admin/contests/' + this.contestId]);
        }
      },
      (error) => {
        alert('something went wrong while saving questions!!');
        console.log(error);
      }
    );
  }
}
