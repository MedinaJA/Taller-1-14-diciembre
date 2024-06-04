import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  public loggedInUser: any;
  

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    if(this.auth.user$){
      this.auth.user$.subscribe((data)=> {
        this.loggedInUser = data;
        console.log('LoggedIn User = ', this.loggedInUser);
      })
    }
  }
}
