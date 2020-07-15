import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'https://reqres.in/api/';
  constructor(private httpClient: HttpClient) {}

  get(url: string) {
    return this.httpClient.get(this.baseUrl + url);
  }

  post(url: string, body: any) {
    return this.httpClient.get(this.baseUrl + url, body);
  }
}
