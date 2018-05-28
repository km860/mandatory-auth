import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user_credentials;
  friends;
  constructor(private authService: AuthService) {
    this.user_credentials = {};
  }

  login(event) {
    // login user using authService.
    this.authService.login(this.user_credentials);
  }

  logout() {
    // logout user using authService.
    this.authService.logout();
    this.authService._user = undefined;
    this.user_credentials = {};
    this.friends = undefined;
  }

  testApi() {
    // test API access by invoking getResource on authService.
    if (localStorage.getItem('token') !== null && this.authService._user) {
      // console.log('item exists');
      const accesstoken = localStorage.getItem('token');
      // console.log(accesstoken);
      this.authService.getResource(accesstoken).subscribe(response => {
        console.log(response);
        this.friends = response;
      });
    } else {
      console.log('no token');
    }
  }
}
