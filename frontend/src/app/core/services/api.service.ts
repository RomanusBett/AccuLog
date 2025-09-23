import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `${environment.apiUrl}`

  constructor(private http: HttpClient) { }

  register(credentials:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, credentials);
  }

  login(credentials: {email:string; password:string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials)
  }

}
