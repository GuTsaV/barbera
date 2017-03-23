import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public af:AngularFire
    ) { }

  ngOnInit() {
  }

  login(){
    this.af.auth.login();
  }

  logout(){
    this.af.auth.logout();
  }

}
