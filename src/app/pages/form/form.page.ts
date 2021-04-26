import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import{FormService} from '../../services/form/form.service';
import{ Router} from "@angular/router"
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
back(){
  this.router.navigate(['menu']);
}
  private form:any={preguntas:[]}
  private  data:any=[...this.form.preguntas];
private rest:any=[...this.form.preguntas];
  constructor(private http:FormService,private router:Router) { }
getData(data:any,index:number){
  console.log("data  "+data)
let info= {...this.data[index],data};
this.data[index]=info;
}
mostrar(){
  
  alert("formulario llenado con exito!")
        
  this.router.navigate(['menu']);
}
ionViewDidEnter(){
    alert(this.form.description_form)}
  ngOnInit() {
    this.form=this.http.getInfo();
  }

}
