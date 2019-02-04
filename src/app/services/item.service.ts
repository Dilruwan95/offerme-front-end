import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient, private router:Router) { }
 
  displayItems(){
    return this.http.get(`http://localhost:8080/api/home/all`);
  }

  displayCategoryItems(categoryname:String){
    return this.http.get(`http://localhost:8080/api/home/${categoryname}`);
  }

  getCategories(){
    return this.http.get(`http://localhost:8080/api/home/allCategory`)
  }

  getItem(id:number){
    return this.http.get(`http://localhost:8080/api/item/advertisment/${id}`)
  }

  


}
