import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  ngOnInit() {
  }

  addUserOrders(userId:number, itemId:number){
    this.orderService.addUserOrders(userId,itemId)
      .subscribe(res => {
        console.log(res);
      })
  }

}
