import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model-log',
  templateUrl: './model-log.component.html',
  styleUrls: ['./model-log.component.scss']
})
export class ModelLogComponent implements OnInit {

  form;
  serverErrorMessages: String;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = fb.group({
      usernameOrEmail: ['',Validators.required],
      password: ['',Validators.required]
    });
   }

  ngOnInit() {
    this.auth.logout();
  }

  get usernameOrEmail(){return this.form.get('usernameOrEmail')}
  get password(){return this.form.get('password')}

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    this.auth.login(form.value.usernameOrEmail, form.value.password)
      .subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['home']);
        },
        error => {
          console.log(error);
          if (error.status === 401) {
            this.serverErrorMessages = error.error.join('<br/>');
          }
        });
  }
}
