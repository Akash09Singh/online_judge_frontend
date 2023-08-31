import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login_service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  ngOnInit(): void {}
  logInData = {
    username: '',
    password: '',
  };

  formSubmit() {
    console.log('login button clicked');
    if (this.validateUserName() == false) return;
    if (this.validatePassword() == false) return;
    this.loginService.generateToken(this.logInData).subscribe(
      (data: any) => {
        console.warn(data);
        console.log('inside generate token');
        //login
        this.loginService.loggedInUser(data.token);
        //get current logged in user
        this.loginService.getCurrentUser().subscribe(
          (data: any) => {
            console.log(data);
            //save current user data in localstorage
            this.loginService.setUser(data);
            if (data.authorities.includes('ADMIN')) {
              //redirect to admin dash board
              this.router.navigate(['admin']);
              // window.location.href = '/admin';
            } else {
              //redirect to user dashboard
              this.router.navigate(['user']);
              // window.location.href = '/user';
            }
            this.loginService.loginStatusSubject.next(true);
          },
          (error) => {
            alert('something went wrong while logging in');
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
        alert('something went wrong while logged in!!');
      }
    );
  }

  //username constraint
  validateUserName() {
    if (
      this.logInData.username.trim() == '' ||
      this.logInData.username == null
    ) {
      this.snackBar.open('username cannot be empty!!', '', {
        duration: 2000,
      });
      return false;
    }
    return true;
  }

  validatePassword() {
    if (
      this.logInData.password.trim() == '' ||
      this.logInData.password == null
    ) {
      this.snackBar.open('password cannot be empty!!', '', {
        duration: 2000,
      });
      return false;
    }
    return true;
  }
}
