import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


// ...

interface AuthResponse {
  token: string;
}

interface User {
  sub: string;
  name: string;
}

// ...

@Injectable()
export class AuthService {
  authResponse: AuthResponse =
  {
    token:
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiJtZUBkb21haW4uY29tIiwibmFtZSI6IkpvaG4gRG9lIn0.
    UqiDgoUjS0J3N-_m9CrU-sJROig9fr25g6WyDoG76eQ`
  };
  // the decoded token if the user has been authenticated, carrying information about the user.
  _user: User; // = {sub: 'bb', name: 'jack'};

  // inject the HttpClient service.
  constructor(private http: HttpClient) {
    // perform any logic upon application startup here...
  localStorage.setItem('token', JSON.stringify(this.authResponse));
  // localStorage.setItem('credentials', JSON.stringify())
  }

  // ...
  // The following computed properties may come in handy in the markup in your template...
  get user() {
    return this._user;
  }

  get authenticated() {
    /* const user = JSON.stringify(this._user);
    localStorage.setItem('User', JSON.stringify(this._user));
    const decoded = jwt_decode(this.authResponse.token);
    console.log(decoded);*/
    return this._user !== undefined;
  }

  // use this method to catch http errors.
  handleError(error: HttpErrorResponse) {
    return Observable.throw({
      error: error.error
    });
  }

  login(credentials): Observable<User> {
    // invoke the relevant API route for authenticating the user with the given credentials and return an observable
    // of a User object (= decoded token).
    //
    // Make sure to handle a successful authentication by storing and also decoding the returned token, as well as
    // catching http errors.
    console.log(credentials);

    // return ...
    return;
  }

  logout() {
    // logout the current user by removing the corresponding token.
  }

  getResource(resource): Observable<any> {
    // invoke a protected API route by including the Authorization header and return an Observable.
    //
    // If e.g. invoking /api/friends, the 'resource' parameter should equal 'friends'.

    // return ...
    return;
  }
}
