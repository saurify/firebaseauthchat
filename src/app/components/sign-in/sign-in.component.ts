import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { storage } from 'firebase';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  public email: String;
  public password: String;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }
  
  signIn() {
    this.authService.SignIn(this.email,this.password).then(()=>console.log("user registered"))
  }
}