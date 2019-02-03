//import { WishListService } from './../../service/wish-list.service';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from '../../services/auth.service';
import { User } from './../../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  username: string;
  user: User = new User();
  // private sub: Subscription;
  currentUser: any;
  res: Subscription;
  id;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
   // private wishListService:WishListService
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(
      res => {
        this.currentUser = res;
        console.log(this.currentUser);
        localStorage.setItem('currentUser',JSON.stringify(res));
        this.id = this.currentUser['id'];
      },
      err => {
        console.log(err);
      }
    )
  }
  


}
