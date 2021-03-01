import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  private form:any={title:'prueba',descripcion:'este es un form',preguntas:[{title:'usted es casado?',input:'select'},{title:'donde vive?',input:'text'},{title:'que edad tiene?',input:'number'}]}
  private preguntas:Array<any>=this.form.preguntas;

  private  data:any[]=this.preguntas;
  constructor() { }
getData(data:any,index:number){
  console.log(data)
let info={title:this.form.title,respuesta:data}
  this.data[index]=info;

}
mostrar(){
  alert(JSON.stringify(this.data))
}
  ngOnInit() {
  }

}
