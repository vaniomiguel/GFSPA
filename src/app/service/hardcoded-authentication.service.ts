import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string, password:string): boolean {
    return username==="in28minutes" && password==="dummy"
  }
}
