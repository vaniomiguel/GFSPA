import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  private httpClient = inject(HttpClient);

  constructor() {}

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString });

    return this.httpClient
      .get<AuthenticationBean>(`http://localhost:8080/basicauth`, { headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        })
      );
  }

  getAuthenticatedUser(): string {
    return sessionStorage.getItem('authenticatedUser') as string;
  }

  getAuthenticatedToken(): string | null {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token') as string;
    }

    return null;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return user !== null;
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
