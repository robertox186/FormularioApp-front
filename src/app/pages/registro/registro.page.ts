import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular'
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router:Router, public fb: FormBuilder,private load:LoadingController,private auth:AuthService) { }


  
  myForm:FormGroup = this.fb.group({
    
    username: [, [Validators.required]],
    email: [, [Validators.required,Validators.email]],

    password: [, [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)]],
    pass2: [, [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)]],
    
    edad: [, [Validators.required,Validators.minLength(15),Validators.maxLength(100)]],
    genero:[,[Validators.required]]
   
  });
  ngOnInit() {
  }
registro(){
  
  alert(JSON.stringify(this.myForm.value))

}

  
}
