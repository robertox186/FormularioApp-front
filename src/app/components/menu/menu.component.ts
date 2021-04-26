import { Component, OnInit,Input } from '@angular/core';
import { LoadingController} from '@ionic/angular'
import{Router} from '@angular/router'
import {MenuService} from '../../services/menu/menu.service'
import {FormService} from '../../services/form/form.service'
@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
@Input() m:any;
@Input() menus:any;
@Input() forms:any;
user:boolean;
submenus:any;
ocultar:boolean=false;
  constructor(private load:LoadingController,private router:Router,private http:MenuService,private form:FormService) { }
mostrar(){
  this.ocultar=!this.ocultar;
}
 nuevo(){

this.http.setInfo(this.m.id_menu)
  this.router.navigate(['add-menu',])

}
deleteForm(info:any){
  this.load.create({
    message:"espere...",
    spinner:'crescent',
    showBackdrop:true,
    keyboardClose:true,
    translucent:true,
   
    
  }).then(loading=>{
        loading.present();
this.form.deleteForm(info).then((res:any)=>{
  loading.dismiss();
  if(res.status == 200){
window.location.reload()

  }else{
    alert("error")
  }
}).catch(err=>{
loading.dismiss();
  alert("errorr")
})



  })
}
l(i:any){
  this.form.setInfo(i);
this.router.navigate(['form'])

}
delete(){
  this.load.create({
    message:"espere...",
    spinner:'crescent',
    showBackdrop:true,
    keyboardClose:true,
    translucent:true,
   
    
  }).then(loading=>{
        loading.present();
this.http.deleteMenu(this.m).then((res:any)=>{
  loading.dismiss();
  if(res.status == 200){
window.location.reload()

  }else{
    alert("error")
  }
}).catch(err=>{
loading.dismiss();
  alert("errorr")
})



  })

}
addform(){
  this.http.setInfo(this.m.id_menu)
  this.router.navigate(['add-form'])
}
getSubmenus(){

  return this.menus.filter(menus=> menus.parent_menu==this.m.id_menu);
}
  ngOnInit() {
     let user:any=JSON.parse(localStorage.getItem('user'))
    this.submenus=this.getSubmenus();
     console.log(user)
    this.user=user.admin
   


  }

}
