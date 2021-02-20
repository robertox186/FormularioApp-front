import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular'
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  elForm:FormGroup = this.fb.group({
    
    correo: [, [Validators.required,Validators.email]],

    password: [, [Validators.required]]
   
  });
recuerdame:boolean=false;
respuesta:any;
  constructor( private router:Router, public fb: FormBuilder,private load:LoadingController) { }
  
    iniciar(){


      this.load.create({
        message:"espere...",
        spinner:'crescent',
        showBackdrop:true,
        keyboardClose:true
        
      }).then(loading=>{
      loading.present();

         // aqui iria la peticion al servidor
        
        setTimeout(()=>{
loading.dismiss();
        },3000)

      })
    }
  ngOnInit() {
  }

}
