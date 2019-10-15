import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterService } from '../shared/register/register.service';
import { Account } from '../shared/accounts/account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countryForm: FormGroup;
  public registered: Account;
  public username: string;
  public password: string;
  public firstname: string;
  public lastname: string;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.registerService.register(null, null, null, null).subscribe(
      account=> {
        this.registered = account;
      }
    )
  }

  register(){
    this.registerService.register(this.username, this.password, this.firstname, this.lastname).subscribe(
      account=> {
        this.registered = account;
        console.log(this.registered);
      }
    )
  }
}
