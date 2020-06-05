import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  public email:String;
  public password:String;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }
  signUp() {
    this.authService.SignUp(this.email,this.password).then(()=>console.log("logged in"))
  }
}