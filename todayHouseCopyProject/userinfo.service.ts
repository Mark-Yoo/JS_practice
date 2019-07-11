import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserinfoList } from './userinfo-list';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  serverUrl: string;

  constructor(private http: HttpClient) { }

  addUserInfo(email: string, password: string, nickname: string) {
    this.http.post<UserinfoList>(this.serverUrl, { userEmailaddress: email, userPassword: password, userNickname: nickname })
  }
}
