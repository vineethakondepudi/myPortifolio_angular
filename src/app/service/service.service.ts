import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

   api = "http://172.17.15.65:4000/api";


   getContact(): Observable<any>{
   return this.http.get<any>(this.api);
   }

   postContact(data:any):Observable<any>{
    return this.http.post<any>(this.api, data)
   }
}
