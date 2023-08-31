import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../User_service/helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  //generate token
  public generateToken(loginData: any) {
    return this.http.post(baseUrl + 'users/' + 'generate-token', loginData);
  }
  // get current user: which is logged in
  public getCurrentUser() {
    return this.http.get(baseUrl + 'users/' + 'current-user');
  }
  // store token to local storage of logged in user
  public loggedInUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  //user is loggedin or not
  public isLoggedin() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == '' || tokenStr == null || tokenStr == undefined)
      return false;
    return true;
  }

  //logout removes token from local
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //save user detail in local storage
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get user details from local storage
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) return JSON.parse(userStr);
    else {
      this.logout();
      return null;
    }
  }

  public getAuthorities() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      let user = JSON.parse(userStr);
      let authorities: string[] = user.authorities;
      return authorities;
    } else {
      this.logout();
      return [];
    }
  }

  public getUserId() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      let user = JSON.parse(userStr);
      let userId = user.id;
      return userId;
    } else {
      this.logout();
      return null;
    }
  }

  public getUsername() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      let user = JSON.parse(userStr);
      let username = user.username;
      return username;
    } else {
      this.logout();
      return null;
    }
  }
}
