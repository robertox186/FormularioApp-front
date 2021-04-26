import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FormService {
info:any;

setInfo(info:any){
this.info=info;
}
getInfo(){
return this.info;

}
  constructor(private http:HttpClient) {
  }

  createForm(info:any){
    let options = {
      headers: {
        'Content-Type': 'application/json',
       
      }
    
    }
    var url="https://formulario1234.herokuapp.com/form/create";
    return new Promise(resolve => {
    this.http.post(url,info,options)
       .subscribe(data => {
         console.log(data)
         resolve(data);
        });
    });
    
    }

    selectAllForm(){
      let options = {
        headers: {
          'Content-Type': 'application/json',
         
        }
      
      }
      var url="https://formulario1234.herokuapp.com/form/select";
      return new Promise(resolve => {
      this.http.post(url,options)
         .subscribe(data => {
           console.log(data)
           resolve(data);
          });
      });
      
      }
      deleteForm(info:any){
        let options = {
          headers: {
            'Content-Type': 'application/json',
           
          }
        
        }
        var url="https://formulario1234.herokuapp.com/form/delete";
        return new Promise(resolve => {
        this.http.post(url,info,options)
           .subscribe(data => {
             console.log(data)
             resolve(data);
            });
        });
        
        }
}
