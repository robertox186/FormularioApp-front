import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu/menu.service';
import {ModalController,LoadingController} from '@ionic/angular';
import {AddMenuPage} from '../add-menu/add-menu.page';
import {FormService} from '../../services/form/form.service';

import{Router} from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
menus:any=[]
forms:any=[];
user:boolean;
  submenus:any; 
constructor(private http:MenuService,private modal:ModalController,private load:LoadingController,private form:FormService,private router:Router) { }
 
nuevo(){

  this.http.setInfo(0);
    this.router.navigate(['add-menu',])
  
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
getMenusRaices(){

  this.submenus= this.menus.filter(menu=> menu.parent_menu==0);

}
   async getMenus(){
    await this.http.selectMenu().then((res:any)=>{

          if(res.status == 200){

this.menus=res.body;
this.getMenusRaices();
console.log(this.menus)
          }else{
            alert("error")
          }

    })
  }
  async getForms(){
    await this.form.selectAllForm().then((res:any)=>{

          if(res.status == 200){

this.forms=res.body;
console.log(this.forms)
          }else{
            alert("error")
          }

    })
  }
  ngOnInit() {

  
  }
  ionViewWillEnter(){ 
     
this.getMenus();
    console.log("ciclo");
  this.getForms();

  let user:any=JSON.parse(localStorage.getItem('user'))
  
   console.log(user)
  this.user=user.admin
}


}
