import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldServiceWithPathVariable(name: string) {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }

}
