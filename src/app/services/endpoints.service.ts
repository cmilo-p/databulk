import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  public url: string;

  constructor(private _http: HttpClient) { 
    this.url = 'https://jsonplaceholder.typicode.com/posts/';
  }

  getLibros(): Observable<any> {
    return this._http.get(this.url);
  }
}
