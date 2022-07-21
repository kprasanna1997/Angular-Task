import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
  }

  postData(data){
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts",data)
  }
}
