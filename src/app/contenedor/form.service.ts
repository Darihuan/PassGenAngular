import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Especifications} from './especifications';
import{Password} from './password';
import{Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  url:string="http://localhost:8080/api/v1/passgen/";


  constructor(private http:HttpClient) { }


  generatepassword(especifications:Especifications):Observable<Password>{
    return this.http.post(this.url,especifications).pipe(map(respuesta=>respuesta as Password));

  }
}
