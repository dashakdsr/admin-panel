import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { config } from '../app.config';

export interface IHandlers<TResponseBody> {
  success(data: TResponseBody);
  error(httpErrorResponse: HttpErrorResponse);
}

export interface IGetOptions<TResponseBody> {
  uri: string;
  parameters?: HttpParams;
  handlers?: IHandlers<TResponseBody>;
  // headers: HttpHeaders;
}

export interface IPutOptions<TRequestBody, TResponseBody> {
  uri: string;
  // parameters?: [IParameter];
  body: TRequestBody;
  // handlers: IHandlers<TResponseBody>;
}

export interface IPostOptions<TRequestBody, TResponseBody> {
  uri: string;
  // parameters?: [IParameter];
  body: TRequestBody;
  handlers?: IHandlers<TResponseBody>;
}

export interface IDeleteOptions<TResponseBody> {
  uri: string;
  // parameters?: [IParameter];
  // handlers: IHandlers<TResponseBody>;
}

@Injectable({
  providedIn: 'root'
})

export class Api {

private apiUrl: string = config.apiUrl;

constructor(private httpClient: HttpClient) {}

  post<TRequestBody, TResponseBody>(options: IPostOptions<TRequestBody, TResponseBody>) {
    return this.httpClient
      .post<TResponseBody>(this.apiUrl + options.uri, options.body);
  }

  get<TResponseBody>(options: IGetOptions<TResponseBody>) {
    return this.httpClient
      .get<TResponseBody>(this.apiUrl + options.uri, {params: options.parameters});
  }

  put<TRequestBody, TResponseBody>(options: IPutOptions<TRequestBody, TResponseBody>) {
    return this.httpClient
      .put<TResponseBody>( this.apiUrl + options.uri, options.body);
  }

  delete<TResponseBody>(options: IDeleteOptions<TResponseBody>) {
    return this.httpClient
      .delete<TResponseBody>(this.apiUrl + options.uri);
  }
}
