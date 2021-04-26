import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {LoadingController} from "@ionic/angular"
import {MenuService} from '../../services/menu/menu.service';
import {FormService} from '../../services/form/form.service'
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.page.html',
  styleUrls: ['./add-form.page.scss'],
})
export class AddFormPage implements OnInit {
 form:any={
  title:'',
  descripcion:'',
    preguntas:[],
  id_menu:-1
    
 }
 pregunta:any={
   title:'',
   input:'',

 }
 back(){
   this.router.navigate(['menu'])
 }
 save(){
  this.load.create({
    message:"espere...",
    spinner:'crescent',
    showBackdrop:true,
    keyboardClose:true,
    translucent:true,
   
    
  }).then(loading=>{
        loading.present();
  this.http.createForm(this.form).then((res:any)=>{
loading.dismiss();
    if(res.status == 200){
          
        this.router.navigate(['menu'])

    }

  }).catch(err=>{
      loading.dismiss();
    alert("error")
  })
})
 }


  constructor(private router:Router,private http:FormService,private menu:MenuService,private load:LoadingController) { }
add(){
  let json={
    title:this.pregunta.title,
    input:this.pregunta.input
  }
  this.form.preguntas.push(json);
  this.pregunta.title='';
  console.log(this.form)
}
quit(i:number){

this.form.preguntas.splice(i,1)

}
  ngOnInit() {
this.form.id_menu=this.menu.getInfo();
console.log(this.form.id_menu)
  }

}
