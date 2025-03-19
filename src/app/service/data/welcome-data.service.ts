import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';

export class HelloWorldBean {
  constructor(public message: string) {}
}


@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {

  private httpClient = inject(HttpClient)

  constructor() { }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldServiceWithPathVariable(name: string) {
    let basicAuthHeaderString = this.createBasicAuthenticateHttpHeader();

    let headers = new HttpHeaders({Authorization: basicAuthHeaderString})

    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`, {headers});
  }

  createBasicAuthenticateHttpHeader(): string {
    let username = 'in28minutes';
    let password = 'dummy';
    let basicAuthHeaderString = 'Basic ' +window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

}
