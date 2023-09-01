import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Testcase } from 'src/app/models/Testcase';
import { TestcaseService } from 'src/app/services/testcase-service/testcase-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-testcase',
  templateUrl: './add-testcase.component.html',
  styleUrls: ['./add-testcase.component.css'],
})
export class AddTestcaseComponent implements OnInit {
  problemId: any;
  testcases: Testcase[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private testcaseService: TestcaseService
  ) {}
  ngOnInit(): void {
    const testcase = new Testcase();
    this.problemId = this.activatedRoute.snapshot.paramMap.get('problemId');
    testcase.problemId = Number(this.problemId);
    this.testcases.push(testcase);
  }

  addTestcase() {
    const testcase = new Testcase();
    testcase.problemId = Number(this.problemId);
    this.testcases.push(testcase);
  }

  saveAllTestcase() {
    this.testcaseService.saveTestcase(this.testcases).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        alert('error while saving testcases!!');
        console.log(error);
      }
    );
    this.router.navigate(['admin/problems/testcase/' + this.problemId]);
  }
}
