import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Admin } from './admin';
import { CurrentUser } from './current-user';
import { Account } from './account';
import { UrlService } from '../url.service';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private appUrl = this.urlSource.getURL() + '/login';
  private adminUrl = this.urlSource.getURL() + '/admin';
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  // private admin: Admin;
  private account: Account;
  private accs: Account[];
  
  constructor(private urlSource: UrlService, private http: HttpClient) { }

  login(username: string, password: string): Observable<Account> {
    console.log(username+' '+password);
    if(username && password) {
      
      const body = `user=${username}&pass=${password}`;
      console.log(body);
      return this.http.post(this.appUrl, body, {headers: this.headers, withCredentials: true})
        .pipe(map(resp => {
          const account: Account = resp as Account;

          this.account = account;

          return account;
        }));
    } else {
      
      return this.http.get(this.appUrl, {withCredentials: true})
        .pipe(map(resp => {
          const account: Account = resp as Account;
          
          this.account = account;

          return account;
        }));
    }
  }

  logout(): Observable<Object> {
    return this.http.delete(this.appUrl, { withCredentials: true }).pipe(
      map(success=> {
        this.account = null;
        console.log("Logged out");
        return success;
      })
    );
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get(this.adminUrl, {withCredentials: true})
    .pipe(map(resp => {

      const accs: Account[] = resp as Account[];

      this.accs = accs;
      console.log("Accs" + accs);
      return accs;
    }));
  }
    
  getSellerAccount(id: number): Observable<Account> {
    return this.http.get(this.appUrl + '/' + id, {withCredentials: true})
        .pipe(map(resp => {
          const account: Account = resp as Account;
          
          this.account = account;

          return account;
        }));
  }//////////

  getAccount(): Account {
    return this.account;
  }

  isAccount(): boolean {
    return (this.account!== undefined && this.account!== null);
  }
}
