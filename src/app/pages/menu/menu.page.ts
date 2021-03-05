import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
menus:any=[{ id_menu:1,title:"menu 1",description:"este es el  menu 1",parent_menu:0},{ id_menu:2,title:"menu 1",description:"este es el  menu 2",parent_menu:0},{ id_menu:3,title:"menu 3",description:"este es el  menu 3",parent_menu:0},{ id_menu:4,title:"menu 4",description:"este es el  menu 4",parent_menu:1},{ id_menu:5,title:"menu 5",description:"este es el  menu 5",parent_menu:1},{ id_menu:6,title:"menu 6",description:"este es el  menu 6",parent_menu:2},{ id_menu:7,title:"menu 7",description:"este es el  menu 7",parent_menu:3},{ id_menu:8,title:"menu 8",description:"este es el  menu 8",parent_menu:4},]
  submenus:any; 
constructor() { }
getMenusRaices(){

  this.submenus= this.menus.filter(menu=> menu.parent_menu==0);
}
  ngOnInit() {
    this.getMenusRaices();
  }

}
