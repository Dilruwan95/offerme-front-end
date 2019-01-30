import { User } from './../../models/user';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { first } from 'rxjs/internal/operators/first';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  username: string;
  user: User = new User();
  // private sub: Subscription;
  currentUser: any;
  res: Subscription;
  name;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(
      res => {
        this.currentUser = res;
        console.log(this.currentUser);
        localStorage.setItem('currentUser',JSON.stringify(res));
        this.name = this.currentUser['name'];
      },
      err => {
        console.log(err);
      }
    )
  }

  loadUserProfile(username: string) {
    this.authService.getUserProfile(username)
    .pipe(first())
      .subscribe( res => {
        this.user = res;
      },
        error => {
          console.log(error);
        });
  }

  logout(){
   this.authService.logout();
    //this.router.navigate(['/home']);
  }

  
}
