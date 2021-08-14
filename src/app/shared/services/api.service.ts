import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  endPoint = environment.api;

  constructor(private http: HttpClient) { 
     
  }

  

  get<T> (url: string, params?:Params ): Observable<T>{

    if(!environment.production) {
      console.log(`GET: ${this.endPoint}/${url}`, params)
    }
   


    return this.http
    
        .get<T>(`${this.endPoint}/${url}`, { params })
        .pipe(tap((data) => {
            if(!environment.production) {
              console.log(`GET result: ${this.endPoint}/${url}`,data )
            }
        }));
       
  }


  post<T> (url: string, data:any , params?:Params ): Observable<T>{

    if(!environment.production) {
      console.log(`POST: ${this.endPoint}/${url}`, data)
    }

    return this.http
        .post<T>(`${this.endPoint}/${url}`, data, { params } )
        .pipe(tap((res) => {
            if(!environment.production) {
              console.log(`POST result: ${this.endPoint}/${url}`, res )
            }
        }));
  }

  delete<T>(url:string, id:string): Observable<T>{
    if(!environment.production){
      console.log(`Delete from ${this.endPoint}/${url}/${id}:`);
    
    return this.http
      .delete<T>(`${this.endPoint}/${url}/${id}`)
      .pipe(
      tap( res => {
        if(!environment.production){
          console.log(`Delete result: , res`);
        }
      }))
  }

}}
