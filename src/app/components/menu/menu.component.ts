import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
@Input() m:any;
@Input() menus:any;
submenus:any;
ocultar:boolean=false;
  constructor() { }
mostrar(){
  this.ocultar=!this.ocultar;
}
getSubmenus(){

  return this.menus.filter(menus=> menus.parent_menu==this.m.id_menu);
}
  ngOnInit() {

    this.submenus=this.getSubmenus();
  }

}
