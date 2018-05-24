import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usernamn;
  user_credentials;
  constructor(private authService: AuthService) {
    this.user_credentials = {};
    this.usernamn = '';
  }

  login(event) {
    // login user using authService.
    this.authService.login(this.user_credentials);
    if (this.authService.user) {
      this.usernamn = this.authService.user.name;
    }
    console.log(this.usernamn);
  }

  logout() {
    // logout user using authService.
  }

  testApi() {
    // test API access by invoking getResource on authService.
  }
}
