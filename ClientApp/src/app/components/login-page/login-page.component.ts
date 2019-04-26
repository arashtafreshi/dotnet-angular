import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [LoginService]
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login();
  }

  docs() {
    this.loginService.GetAllDocs().then(
      data => {
        console.log(data);
      },
      err => {
        console.error(err);
      }
    );
  }

}
