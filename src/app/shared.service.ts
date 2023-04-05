import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Idata} from './Idata';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpc:HttpClient) {

   }
   public getPosts():Observable<Idata[]>
   {
    return this.httpc.get<Idata[]>('https://jsonplaceholder.typicode.com/posts'); 


   }
}
