import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [AuthService]
})
export class SignUpComponent implements OnInit {

  form= new FormGroup({
     YourName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
     Username:new FormControl('',Validators.required),
     email:new FormControl('',[Validators.required,Validators.email]),
     password:new FormControl('',[Validators.required,Validators.minLength(6)]), 
     Contact:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]), 
     address:new FormControl('',Validators.required), 
     role:new FormControl('')

  })

  constructor(
    private auth: AuthService
  ) { 
  
  }
  

  ngOnInit() {
    

  }

  logIn(credentials){
    
       
      this.auth.register(credentials)
    
  }

  
  

 
}
