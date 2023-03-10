import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://fakestoreapi.com';

  /**
   * @description Base backend URL
   *
   * @readonly
   * @type {string}
   */
  get URL(): string {
    return this.baseUrl;
  }

  constructor(private http: HttpClient) {}

  /**
   * @description Post request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @param options - to add custom config for request header
   * @return Observable of response, comes from the end point
   */
  post(url: string, data: any, options?: any): Observable<any> {
    return this.http.post(`${this.URL}${url}`, data, options);
  }

  /**
   * @description Patch request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @param options - to add custom config for request header
   * @return Observable of response, comes from the end point
   */
  patch(url: string, data: any, options?: any): Observable<any> {
    return this.http.patch(this.URL + url, data, options);
  }

  /**
   * @description Get request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  get(url: string, data?: any, params?: any): Observable<any> {
    return this.http.get(this.URL + url, params);
  }

  /**
   * @description PUT request using angular httpClient module
   * you can bass a parameter (data) in the url separated by '/'
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  put(url: string, data?: any, options?: any): Observable<any> {
    return this.http.put(this.URL + url, data, options);
  }

  /**
   * @description DELETE request using angular httpClient module
   * you can bass a parameter (data) in the url separated by '/'
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  delete(url: string, data?: any, params?: any): Observable<any> {
    return this.http.delete(this.URL + url, params);
  }
}
