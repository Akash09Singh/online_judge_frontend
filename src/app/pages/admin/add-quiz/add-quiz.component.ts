import { Component } from '@angular/core';
import { ContestsService } from 'src/app/services/contest_service/contests.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent {
  constructor(private contestService: ContestsService) {}
  contestData = {
    title: '',
    endTime: '',
  };

  formSubmit() {
    this.contestService.createContest(this.contestData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'contest created successfully', 'success');
      },
      (error) => {
        alert("couldn't create contest");
      }
    );
  }
}
