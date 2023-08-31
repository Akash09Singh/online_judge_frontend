import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  registerUser(user: any) {
    return this.http.post(baseUrl + 'users/register', user);
  }
}
