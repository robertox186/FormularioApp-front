import { Component, Input, OnInit } from '@angular/core';
import{ ModalController,LoadingController} from '@ionic/angular';
import {MenuService} from '../../services/menu/menu.service';
import {Router} from  '@angular/router'
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {
title:string='';

parent_menu:number;
  constructor(private modal:ModalController,private load:LoadingController,private http:MenuService,private router:Router) { }
back(){
  this.router.navigate(['menu'])
}
nuevo(){
  let json={
    title:this.title,
    parent_menu:this.parent_menu
  }

  this.load.create({
    message:"espere...",
    spinner:'crescent',
    showBackdrop:true,
    keyboardClose:true,
    translucent:true,
   
    
  }).then(loading=>{
        loading.present();
this.http.newMenu(json).then((res:any)=>{
  loading.dismiss();
  if(res.status == 200){

this.router.navigate(['menu'])

  }else{
    alert("error")
  }
}).catch(err=>{

  alert("errorr")
})



  })

}

  ngOnInit() {
  
  this.parent_menu=this.http.getInfo();
  console.log(this.parent_menu)
  }


}
