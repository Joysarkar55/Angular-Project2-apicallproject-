import { Component } from '@angular/core';
//import {UserResponse} from './UserResponse';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  results = '';
  constructor(private http: HttpClient) {

  }
  ngOnInt(): void{
    this.http.get('')
    
     const req = this.http.post('https://jsonplaceholder.typicode.com/posts',
      {
        title: 'foo',
        body: 'bar',
        userId: 1
      })
      .subscribe(
        res=>
        {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
        )}
      };
    


    
     