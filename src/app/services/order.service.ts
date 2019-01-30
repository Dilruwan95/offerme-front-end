import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private router:Router) { }
  getUserOrders(userId){
    return this.http.get(`http://localhost:8080/api/order/Orders/${userId}`)
  }

  deleteUserOrders(orderId){
    return this.http.delete(`http://localhost:8080/api/order/DeleteOrder/${orderId}`)
  }

  addUserOrders(itemId, userId){
    return this.http.post(`http://localhost:8080/api/order/addOrderList`,{itemId,userId})
  }
}
