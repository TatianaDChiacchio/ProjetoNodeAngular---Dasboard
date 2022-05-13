import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http:HttpClient) { }

  realizarConversao():Observable<any>{
    const apiKey = "dM5PjqEAwPCXg4WPRIrIkNnnGnmnHDjk3mEE"
    const url=`https://currencyapi.net/api/v1/rates?key=${apiKey}&output=JSON`
    return this.http.get<any>(url)
  }
}
