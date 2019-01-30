import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username: string;
  user: User = new User();
  // private sub: Subscription;
  currentUser: any;
  res: Subscription;
  name;
  constructor(private authService: AuthService) { }

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
  }

}
