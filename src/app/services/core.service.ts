import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private baseUrl: string = 'https://cd-service.herokuapp.com/';
  constructor(private http: Http) { }
  
  /**
   * 
   * @param lead 
   */
  createLead(lead: {
    email: string;
    name: string;
    message: string;
  }): Observable<any> {
    return this.http.post(this.baseUrl + 'leads', lead);
  }
}
