import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

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
      .get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        })
      );
  }

  getAuthenticatedUser(): string {
    return sessionStorage.getItem(AUTHENTICATED_USER) as string;
  }

  getAuthenticatedToken(): string | null {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN) as string;
    }

    return null;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return user !== null;
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
