import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account } from '../accounts/account';
import { UrlService } from '../url.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private appUrl = this.urlSource.getURL() + '/register';
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  
  private account: Account;
  
  constructor(private urlSource: UrlService, private http: HttpClient) { }

  register(username: string, password: string, firstname: string, lastname: string): Observable<Account> {
      
    console.log(username+' '+password+' '+firstname+' '+lastname);
    if(!username || !password || !firstname || !lastname) {
      return this.http.get(this.appUrl, {withCredentials: true})
        .pipe(map(resp => {
          const account: Account = resp as Account;
          
          this.account = account;

          return account;
        }));
      
    } else {
      const body = `user=${username}&pass=${password}&first=${firstname}&last=${lastname}`;
      console.log(body);
      return this.http.post(this.appUrl, body, {headers: this.headers, withCredentials: true})
        .pipe(map(resp => {
          const account: Account = resp as Account;

          this.account = account;

          return account;
        }));
    }
  }
}