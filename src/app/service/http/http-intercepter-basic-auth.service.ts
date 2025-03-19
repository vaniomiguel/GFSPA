import {
  HttpEvent,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

export const httpIntercepterBasicAuthFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const basicAuthenticationService = inject(BasicAuthenticationService);
  /*
  let username = 'in28minutes';
  let password = 'dummy';
  let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  */
  let basicAuthHeaderString =
    basicAuthenticationService.getAuthenticatedToken();
  let username = basicAuthenticationService.getAuthenticatedUser();

  if (basicAuthHeaderString && username) {
    req = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString,
      },
    });
  }

  return next(req);
};
/*
@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let username = 'in28minutes';
    let password = 'dummy';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    req = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString,
      },
    });

    return next.handle(req);
  }
}*/
