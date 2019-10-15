import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';

import { UrlService } from './shared/url.service';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }


  //{ path: '**', component: AppComponent } //make page not found component
];


@NgModule({
  
  declarations: [
    AppComponent,
    //PrepMainComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
