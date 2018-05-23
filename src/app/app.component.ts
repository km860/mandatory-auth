import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user_credentials;
  constructor(private authService: AuthService) {
    this.user_credentials = {};
  }

  login(event) {
    // login user using authService.
    this.authService.login(this.user_credentials);
  }

  logout() {
    // logout user using authService.
  }

  testApi() {
    // test API access by invoking getResource on authService.
  }
}
