import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestcaseService } from 'src/app/services/testcase-service/testcase-service.service';

@Component({
  selector: 'app-view-testcase',
  templateUrl: './view-testcase.component.html',
  styleUrls: ['./view-testcase.component.css'],
})
export class ViewTestcaseComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private testcaseService: TestcaseService,
    private router: Router
  ) {}
  problemId: any;
  testcases: any;
  ngOnInit(): void {
    this.problemId = this.activatedRoute.snapshot.paramMap.get('problemId');
    this.testcaseService.getTestCaseByProblemId(this.problemId).subscribe(
      (data) => {
        this.testcases = data;
        console.log(this.testcases);
      },
      (error) => {
        alert('error fetching testcases');
        console.log(error);
      }
    );
  }
  deleteTestcase(testcaseId: any) {
    this.testcaseService.deleteTestcase(testcaseId).subscribe(
      (data) => {},
      (error) => {
        alert('error deleting testcase');
        console.log(error);
      }
    );
    window.location.reload();
  }
}
