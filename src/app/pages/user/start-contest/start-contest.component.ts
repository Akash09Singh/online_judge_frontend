import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SubmitContest } from 'src/app/models/SubmitContest';
import { ContestsService } from 'src/app/services/contest_service/contests.service';
import { LoginService } from 'src/app/services/login_service/login.service';
import { ProblemsService } from 'src/app/services/problem_service/problems.service';
import { SubmitContestService } from 'src/app/services/submit_service/submit-contest.service';
import { SubmitProblemService } from 'src/app/services/submit_service/submit-problem.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-contest',
  templateUrl: './start-contest.component.html',
  styleUrls: ['./start-contest.component.css'],
})
export class StartContestComponent implements OnInit {
  contestTimeInSeconds: number = this.covertContestTimeinSeconds(); // 1 hour and 30 minutes in seconds
  remainingTimeInSeconds!: number;
  timer: any;
  contestId: any;
  user: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private submitProblemSevice: SubmitProblemService,
    private submitContestService: SubmitContestService,
    private loginService: LoginService,
    private contestService: ContestsService,
    private problemService: ProblemsService
  ) {}
  ngOnInit(): void {
    this.remainingTimeInSeconds = this.covertContestTimeinSeconds();
    this.contestId = this.activatedRoute.snapshot.paramMap.get('contestId');
    this.startCountdown();
    this.user = this.loginService.getUser();
    window.onpopstate = (event) => {
      this.finalEndContest();
    };
  }

  covertContestTimeinSeconds() {
    let contestTime = localStorage.getItem('contestTime');
    let contestInSec = 0;

    if (contestTime !== null) {
      // Split the contestTime string into hours, minutes, and seconds
      const [hoursStr, minutesStr, secondsStr] = contestTime.split(':');
      // Convert the strings to numbers
      const hours: number = parseInt(hoursStr, 10);
      const minutes: number = parseInt(minutesStr, 10);
      const seconds: number = parseInt(secondsStr, 10);

      // Convert to seconds
      const totalSeconds: number = hours * 3600 + minutes * 60 + seconds;
      contestInSec = totalSeconds;
      console.log(contestInSec);
    }
    return contestInSec;
  }

  formattedTime() {
    const restoredHours: number = Math.floor(
      this.remainingTimeInSeconds / 3600
    );
    const restoredMinutes: number = Math.floor(
      (this.remainingTimeInSeconds % 3600) / 60
    );
    const restoredSeconds: number = this.remainingTimeInSeconds % 60;

    return (
      '0' +
      restoredHours +
      ' Hr ' +
      restoredMinutes +
      ' min ' +
      restoredSeconds +
      ' sec'
    );
  }

  startCountdown(): void {
    this.timer = setInterval(() => {
      if (this.remainingTimeInSeconds > 0) {
        this.remainingTimeInSeconds--;
      } else {
        // will update later
        this.finalEndContest();
        clearInterval(this.timer);
      }
    }, 1000); // Update every 1 second (1000 milliseconds)
  }

  timeTaken() {
    let timeTaken = this.contestTimeInSeconds - this.remainingTimeInSeconds;
    const restoredHours: number = Math.floor(timeTaken / 3600);
    const restoredMinutes: number = Math.floor((timeTaken % 3600) / 60);
    const restoredSeconds: number = timeTaken % 60;

    return (
      '0' +
      restoredHours +
      ':' +
      restoredMinutes +
      ':' +
      restoredSeconds +
      ' Hrs'
    );
  }

  endContest() {
    //swal popup
    Swal.fire({
      title: 'Do you want to end contest?',
      showCancelButton: true,
      confirmButtonText: 'yes',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.finalEndContest();
      }
    });
  }

  finalEndContest() {
    const userTime = this.timeTaken();
    const contestData = this.setContestSubmissionData();
    console.warn(contestData.userId, typeof contestData.userId);
    this.submitContestService.saveContest(contestData).subscribe(
      (data) => {
        this.endContestSwalFire(userTime);
        localStorage.removeItem('contestTime');
        localStorage.removeItem('contestFirstProblemId');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  endContestSwalFire(userTime: any) {
    Swal.fire({
      title: 'Result',
      html:
        '<div style="text-align:left;"><b>Contest Time</b>: ' +
        localStorage.getItem('contestTime') +
        '<b> Hrs</b>' +
        '<br /><br />' +
        '<b>Time Taken</b>: ' +
        userTime +
        '<b> Hrs</b>' +
        '<br /><br />' +
        '<b>Accepted Problems</b>: ' +
        this.submitProblemSevice.acceptedContestQuestion +
        '</div>',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    }).then((result) => {
      this.router.navigate(['/user']);
    });
  }

  setContestSubmissionData() {
    const contestData: SubmitContest = {
      userId: this.loginService.getUserId(),
      contestName: this.contestService.getContestName(),
      timeTaken: this.timeTaken(),
      solvedQuestion: this.submitProblemSevice.acceptedContestQuestion,
      totalTime: this.contestService.getContestTime(),
      totalQuestion: Number(this.problemService.getContestProblemCount()),
    };
    return contestData;
  }
}
