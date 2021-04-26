import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MenuService {
info:any;
setInfo(i:number){

this.info=i;

}
getInfo(){
  return this.info;
}
  constructor(private  http:HttpClient) { }
newMenu(info:any){
  let options = {
    headers: {
      'Content-Type': 'application/json',
     
    }
  
  }
  var url="https://formulario1234.herokuapp.com/menu/new";
  return new Promise(resolve => {
  this.http.post(url,info,options)
     .subscribe(data => {
       console.log(data)
       resolve(data);
      });
  });
  
  



}
deleteMenu(info:any){
  let options = {
    headers: {
      'Content-Type': 'application/json',
     
    }
  
  }
  var url="https://formulario1234.herokuapp.com/menu";
  return new Promise(resolve => {
  this.http.post(url,info,options)
     .subscribe(data => {
       console.log(data)
       resolve(data);
      });
  });
  
  



}
  selectMenu(){
    
      let options = {
        headers: {
          'Content-Type': 'application/json',
         
        }
      
      }
      var url="https://formulario1234.herokuapp.com/menu/select";
      return new Promise(resolve => {
      this.http.post(url,options)
         .subscribe(data => {
           console.log(data)
           resolve(data);
          });
      });
      
      

  }
}
