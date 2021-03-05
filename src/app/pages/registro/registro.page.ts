import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController,MenuController} from '@ionic/angular'
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router:Router, public fb: FormBuilder,private load:LoadingController,private auth:AuthService,private menu:MenuController) { }


  private respuesta:any;
  myForm:FormGroup = this.fb.group({
    
    username: [, [Validators.required]],
    email: [, [Validators.required,Validators.email]],

    contraseña: [, [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)]],
    pass2: [, [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)]],
    
    edad: [, [Validators.required,Validators.minLength(15),Validators.maxLength(100)]],
    genero:[,[Validators.required]]
   
  });
  ngOnInit() {
  this.menu.enable(false)
  }
registro(){
  
  this.load.create({
    message:"espere...",
    spinner:'crescent',
    showBackdrop:true,
    keyboardClose:true,
    translucent:true,

    
  }).then(loading=>{
  loading.present();
   this.auth.registro(this.myForm.value).then(res=>{
      loading.dismiss();
this.respuesta=res;
if(this.respuesta.status==200){
  localStorage.setItem("user",JSON.stringify(this.respuesta.body))
this.router.navigate(['/menu']);
}else {
alert("error:  "+this.respuesta.status)

}

   }).catch(err=>{
        loading.dismiss();
    alert("error verifice su conexion")
   })

  


})
}
}