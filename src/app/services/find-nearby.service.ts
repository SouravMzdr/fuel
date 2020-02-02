import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindNearbyService {

  constructor(private http:HttpClient) { }

  // SearchItem:any

  
  
  search(term?:string):Observable<any>{

    const options = {
      withCredentials: false,
    };

    const corsProxyUrl = 'https://cors-anywhere.herokuapp.com';
    let apiUrl = corsProxyUrl +  '/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDUUFIwo50p5lGIYZOSJygAb3kIDqZDudo';

    return this.http.get(apiUrl,options);
  }
}
