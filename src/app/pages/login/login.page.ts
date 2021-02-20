import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular'
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 respuesta:any;
  elForm:FormGroup = this.fb.group({
    
    correo: [, [Validators.required,Validators.email]],

    password: [, [Validators.required]]
   
  });
  constructor( private router:Router, public fb: FormBuilder,private load:LoadingController,private auth:AuthService) { }
  
    iniciar(){


      this.load.create({
        message:"espere...",
        spinner:'crescent',
        showBackdrop:true,
        keyboardClose:true,
        translucent:true
        
      }).then(loading=>{
      loading.present();
       this.auth.login(this.elForm.value).then(res=>{
          loading.dismiss();
this.respuesta=res;
           if(this.respuesta.status==200){


           }else {
             alert("error...")

           }

       }).catch(err=>{
            loading.dismiss();
        alert("error verifice su conexion")
       })
         // aqui iria la peticion al servidor
        
        setTimeout(()=>{
loading.dismiss();
        },3000)

      })
    }
  ngOnInit() {
  }

}
