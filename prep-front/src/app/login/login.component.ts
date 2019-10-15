import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CurrentUser } from 'src/app/shared/accounts/current-user';
import { AccountService } from 'src/app/shared/accounts/account.service';
import { Account } from '../shared/accounts/account';
//import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loggedAccount: Account;
  public username: string;
  public password: string;
  //@Input() profile: ProfileComponent;

  constructor(private accountService: AccountService) { }
  
  ngOnInit() {
    this.accountService.login(null,null).subscribe(
      account=> {
        this.loggedAccount = account;
        
      }
    )
  }

  login(): void {
    this.accountService.login(this.username, this.password).subscribe(
      account=> {
        this.loggedAccount = account;
        if(this.loggedAccount !== null){
          this.loggedAccount.username = account['username'];
          
          console.log(account);
        }
      }
    )
  }

  logout(): void {
    this.accountService.logout().subscribe();
    this.loggedAccount=null;
    this.username=null;
    this.password=null;
  }
}
