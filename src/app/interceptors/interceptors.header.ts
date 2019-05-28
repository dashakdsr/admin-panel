import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest, HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

/*
  Using interceptors is all about changing outgoing requests and incoming responses
  Here we are using it for setting headers
*/
@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this is the way to set new headers for requests
    let interceptHeaders;
    // const apiKey = this.cookie.getCookie('apiKey') || '';
    interceptHeaders = req.headers.set('Content-Type', 'application/json; charset=utf-8');

    // interceptHeaders = interceptHeaders.set('apiKey', apiKey);
    const modifiedRequest = req.clone({headers: interceptHeaders});
    return next.handle(modifiedRequest).pipe(tap(((event: HttpEvent<any>) => {
      return of(event);
    })));
  }
}
