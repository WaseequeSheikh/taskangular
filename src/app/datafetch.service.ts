import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatafetchService {

  constructor(private http:HttpClient) { }



  public formreports(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/");

  }

  getAlldata() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/")
  }

}
