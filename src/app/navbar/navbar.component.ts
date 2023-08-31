import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login_service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public loginService: LoginService) {}
  isLoggedIn = false;
  user = null;
  ngOnInit(): void {
    this.loginService.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.loginService.isLoggedin();
      this.user = this.loginService.getUser();
    });
  }
  logOut() {
    this.loginService.logout();
    //this.loginService.loginStatusSubject.next(false);
    window.location.reload();
  }
}
