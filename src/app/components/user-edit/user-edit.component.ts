import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {first} from "rxjs/operators";


export interface currentUser {
  id ? : number,
  name?: string,
  username?: string,
  email?: string,
  address?: string,
  telephone?: string
}

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  currentUser: currentUser = {};
  form;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
   }

  ngOnInit() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
    });

    this.currentProfile();
  }

  get name(){
    return this.form.get('name');
  }

  get username(){
    return this.form.get('username');
  }

  get telephone(){
    return this.form.get('telephone');
  }

  get address(){
    return this.form.get('address');
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }


  currentProfile(){
    this.authService.getUser()
    .subscribe(data=>{
      this.currentUser = data;
      //console.log(data);
    })
  }

  onSubmit(form){
    
    // this.form.reset();
    this.authService.editUserProfile(form.value)
    .subscribe(res =>{
       console.log(res);
    },
        err =>{
          //alert
          console.log(err);
      } 
    );
  } 

 /* googleReg(){
    this.registerService.googleRegister('student').
      subscribe(response=>{
        let res = response.json();
      });
  }

  facebookRegister(){
    this.registerService.facebokRegister('tutor')
      .subscribe(res => {
        console.log(res.json());
      })
    console.log("facebook log");
  }*/

}