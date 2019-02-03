import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryComponent } from './../category/category.component';
import { ItemService } from './../../services/item.service';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.scss']
})
export class CreateAdvertisementComponent implements OnInit {
  categories:any;
   ref: AngularFireStorageReference;
   task: AngularFireUploadTask;
 
  constructor(private afStorage: AngularFireStorage, private itemService:ItemService) { }

   upload(event){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
   }

  ngOnInit() {

  }

  logIn(credentials){
    
       console.log(credentials)

  
}

CreateAdvertisement=new FormGroup({
 // role:new FormControl('',[Validators.required]),
  //NewPrice:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
 // OldPrice:new FormControl('',[Validators.pattern("^[0-9]*$")]),
  //Discount:new FormControl('',[ Validators.required,Validators.pattern("^[0-9]*$")]),
  //StartDate:new FormControl('',[ Validators.required]),
 // EndDate:new FormControl('', [Validators.required, ] ),
  //selectedCountriesControl : new FormControl('', [Validators.required, ] ),
})

getCatergory(){
  this.itemService.getCategories().subscribe(
    res=>{this.categories=res;
    },err=>{console.log(err);
    }
  )
}
  
}
