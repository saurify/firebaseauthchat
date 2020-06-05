import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { Router } from "@angular/router";
import { ChatService } from 'src/app/shared/services/chat.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore, messaging } from 'firebase';
import { AuthService } from "../../shared/services/auth.service";
import { Observable, empty } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public messagesList: Observable<Object>;
  public usersList;
  public name;
  public nameFinal = "default";
  public msgVal;
  constructor(
    public firestore: AngularFirestore,
    public authService: AuthService,
    public afs: AngularFireDatabaseModule,
    public router: Router,
    public ngZone: NgZone,
    private chatService: ChatService
  ) { this.messagesList = this.firestore.collection('messages').valueChanges();
    }

  ngOnInit() { 
    
  }
  resetUsername(){
    this.nameFinal="default";
    this.name=""
  }
  submitName(){
    this.nameFinal=this.name;
  }
  create() {
    return this.firestore.collection("messages").add({ message: this.msgVal, name: this.name});
  }
}
