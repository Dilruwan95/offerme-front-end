import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {
  items:any;
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.itemService.displayItems().subscribe(
      res => {
        this.items = res;
        console.error(this.items);
      },
      err => {
        console.log(err);
      }
    )
  }

}
