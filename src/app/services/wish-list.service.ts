import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private http: HttpClient, private router:Router) { }
  getUserOrders(userId){
    return this.http.get(`http://localhost:8080/api/wishList/WishLists/${userId}`)
  }

  deleteUserOrders(wishListId){
    return this.http.delete(`http://localhost:8080/api/wishList/DeleteWishList/${wishListId}`)
  }

  addUserOrders(itemId, userId){
    return this.http.post(`http://localhost:8080/api/wishList/addWishListList`,{itemId,userId})
  }
}
