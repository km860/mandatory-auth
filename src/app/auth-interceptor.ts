import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders, HttpHandler} from '@angular/common/http';

import { Observable } from 'rxjs/';
import { of } from 'rxjs/observable/of';

// ...
// Example of user credentials to match against incoming credentials.
const username  = 'me@domain.com';
const password  = 'password';

// list of friends to return when the route /api/friends is invoked.
const friends   = ['alice', 'bob'];

// the hardcoded JWT access token you created @ jwt.io.
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtZUBkb2' +
             '1haW4uY29tIiwibmFtZSI6IkpvaG4gRG9lIn0.wKPiyFCFnCvNcK6vIqy2e_Cp9vXFwJxpx5HKVu_u3Wk';

// ...
// Use these methods in the implementation of the intercept method below to return either a success or failure response.
const makeError = (status, error) => {
    return Observable.throw(
        new HttpErrorResponse({
            status: status,
            error: error,
        })
    );
};

const makeResponse = body => {
    return of(
        new HttpResponse({
            status: 200,
            body
        })
    );
};

// ...

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {
        body,       // object
        headers,    // object
        method,     // string
        url,        // string
    } = req;
    console.error('intercepted', method, url);

    if (url.endsWith('/auth')) {
        if (body.name === username && body.password === password) {
            console.log('yes');
            return makeResponse(token);
        } else {
            console.log('no');
            return makeError(401, 'Invalid user credentials');
        }
    } else if (url.endsWith('/friends')) {
    }
    /* return Observable.of(new HttpResponse({
        status: 200,
        body: {name: 'niklas', id: 3},
    })); */
    // implement logic for handling API requests, as defined in the exercise instructions.

  }
}
