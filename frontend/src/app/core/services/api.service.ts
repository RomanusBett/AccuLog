import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `${environment.apiUrl}`

  constructor(private http: HttpClient) { }

  private getAuthHeaders():{headers:HttpHeaders}{
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }
  }

  register(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, credentials)
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials)
  }

  logoutUser(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, this.getAuthHeaders())
  }

  addVehicle(details: { model: string; colour: string; year: string; license: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-vehicle`, details, this.getAuthHeaders())
  }

  getVehicles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-cars`, this.getAuthHeaders())
  }

}
