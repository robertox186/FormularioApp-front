import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController,MenuController} from '@ionic/angular'
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 respuesta:any;
  elForm:FormGroup = this.fb.group({
    
    email: [, [Validators.required,Validators.email]],

    contraseña: [, [Validators.required]]
   
  });
  constructor( private router:Router, public fb: FormBuilder,private load:LoadingController,private auth:AuthService,private menu:MenuController) { }
  
    iniciar(){


      this.load.create({
        message:"espere...",
        spinner:'crescent',
        showBackdrop:true,
        keyboardClose:true,
        translucent:true,
       
        
      }).then(loading=>{
      loading.present();
       this.auth.login(this.elForm.value).then(res=>{
          loading.dismiss();
this.respuesta=res;
console.log(this.respuesta)

           if(this.respuesta.status==200){
                 localStorage.setItem("user",JSON.stringify(this.respuesta.body))
    this.router.navigate(['/menu']);
           }else {
             alert("error:  "+this.respuesta.status)

           }

       }).catch(err=>{
            loading.dismiss();
            console.log(err)
        alert("error verifice su conexion")
       })
         // aqui iria la peticion al servidor
        
        
      })
    }
  ngOnInit() {

    this.menu.enable(false);
  }

}
