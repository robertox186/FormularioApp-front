import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  private form:any=
  {title:'prueba',descripcion:'este es un form',preguntas:[{title:'usted es casado?',input:'date'},{title:'donde vive?',input:'text'},{title:'que edad tiene?',input:'number'}]}
 

  private  data:any=this.form.preguntas;
  constructor() { }
getData(data:any,index:number){
  console.log(data)
let info= {...this.data[index],data}
this.data[index]=info;
}
mostrar(){
  
  alert(JSON.stringify(this.data))
}
  ngOnInit() {
  }

}
