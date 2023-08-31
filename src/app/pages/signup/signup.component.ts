import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { RegisterService } from '../../services/User_service/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  ngOnInit(): void {}
  newUser: User = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    enable: true,
  };

  formSubmit() {
    if (this.validateUserName() == false) {
      return;
    }
    this.registerService.registerUser(this.newUser).subscribe(
      (data) => {
        console.warn(data);
        Swal.fire('Success', 'user registered', 'success');
        delay(4000);
        this.router.navigate(['login']);
      },
      (error) => {
        console.log(error);
        this.snackBar.open('Something went wrong ! Try again !', '', {
          duration: 2000,
        });
      }
    );
  }

  //username constraint
  validateUserName() {
    if (this.newUser.username == '' || this.newUser.username == null) {
      this.snackBar.open('username cannot be empty!!', '', {
        duration: 2000,
      });
      return false;
    } else {
      return true;
    }
  }
}
