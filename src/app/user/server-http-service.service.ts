import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerHttpServiceService {

  serverUrl = "https://httpmodule-d9260.firebaseio.com/data";
  //serverUrl = "http://httpbin.org/"
  constructor(private http: Http) { }

  saveServerDetails(serverDetails: any) {

    const headers = new Headers({ 'Content-Type': 'application/xml' });

    // console.log(JSON.stringify(serverDetails));

    return this.http.post(`${this.serverUrl}`, serverDetails.value, { headers: headers });
  }

  getServerDetails() {
    return this.http.get(`${this.serverUrl}`).map((data: Response) => {
      const response = data.json();
      return response;
    }).catch((error:Response)=>{
      console.log('>>>>>>>>>>>'+error)
      return Observable.throw(error);
      
    });
    
  }

}
