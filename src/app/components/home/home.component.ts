import { ItemService } from './../../services/item.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items:any;
  categories: Object;


  constructor(private authService:AuthService, private itemService:ItemService) { }

  ngOnInit() {
    this.itemService.displayItems().subscribe(
      res => {
        this.items = res;
        console.log(this.items);
      },
      err => {
        console.log(err);
      }
    )
    this.displayCategory();
  }
displayCategory(){
 this.itemService.getCategories().subscribe(
   res=>{
      this.categories=res;
      console.log(this.categories);
   },err=>{
     console.log(err);
   }
 )
}

}
