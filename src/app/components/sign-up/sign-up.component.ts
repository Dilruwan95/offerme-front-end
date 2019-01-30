import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [AuthService]
})
export class SignUpComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  constructor(
    private authService:AuthService) { }

  onSubmit(form: NgForm) {
    this.authService.register(form.value).subscribe(
      res => {
        console.log(res);
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        console.log(err);
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'your email or user name already used';
      }
    );
  }

  resetForm(form: NgForm) {
    this.authService.user = {
      id: 0,
      name:'',
      username:'',
      address:'',
      telephone:'',
      email:'',
      password:''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  ngOnInit() {
    

  }


}
