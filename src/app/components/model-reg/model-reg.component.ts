import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-model-reg',
  templateUrl: './model-reg.component.html',
  styleUrls: ['./model-reg.component.scss']
})
export class ModelRegComponent implements OnInit {

 

  form;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) { 
    this.form = fb.group({
      name: ['', Validators.required],
      telephone: ['',Validators.required],
      address: ['',Validators.required],
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  get name(){return this.form.get('name')}
  get telephone(){return this.form.get('telephone')}
  get address(){return this.form.get('address')}
  get username(){return this.form.get('username')}
  get email(){return this.form.get('email')}
  get password(){return this.form.get('password')}


  onSubmit(form){
    this.auth.register(form.value)
      .subscribe(res => {
        console.log(res['message']);
      })
  }

}
