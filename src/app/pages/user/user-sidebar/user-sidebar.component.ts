import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login_service/login.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent {
  constructor(private loginService: LoginService) {}
  logOut() {
    this.loginService.logout();
    window.location.reload();
  }
}
