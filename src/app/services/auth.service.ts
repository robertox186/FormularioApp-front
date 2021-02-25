import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
    }

    login(info:any){
      let options = {
        headers: {
          'Content-Type': 'application/json',
         
        }
      
      }
      var url="//localhost:3000/login";
      return new Promise(resolve => {
      this.http.post(url,info,options)
         .subscribe(data => {
           console.log(data)
           resolve(data);
          });
      });
      
      }

      registro(info:any){
        let options = {
          headers: {
            'Content-Type': 'application/json',
           
          }
        
        }
        var url="//localhost:3000/registro";
        return new Promise(resolve => {
        this.http.post(url,info,options)
           .subscribe(data => {
             console.log(data)
             resolve(data);
            });
        });
        
        }

}
