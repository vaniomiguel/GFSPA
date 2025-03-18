import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  private httpClient = inject(HttpClient);

  constructor() {}

  authenticate(username: string, password: string): boolean {
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }

    return false;
  }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString });

    return this.httpClient.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      { headers }
    );
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return user !== null;
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
