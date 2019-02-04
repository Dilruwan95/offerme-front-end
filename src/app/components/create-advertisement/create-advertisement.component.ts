import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryComponent } from './../category/category.component';
import { ItemService } from './../../services/item.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.scss']
})
export class CreateAdvertisementComponent implements OnInit {
  categories:any;
   ref: AngularFireStorageReference;
   task: AngularFireUploadTask;
   downloadURL: Observable<string>;

   patientForm: FormGroup;


 
  constructor(private afStorage: AngularFireStorage, private itemService:ItemService) { }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.ref.getDownloadURL() )
   )
  .subscribe(
  );
  this.task.snapshotChanges().pipe(
    finalize(() => {
      this.ref.getDownloadURL().subscribe(url => {
        console.log(url,"mmmmmmmmmmm"); // <-- do what ever you want with the url..
      });
    })
  ).subscribe();
   }

  ngOnInit() {

  }

  logIn(credentials){
    
       console.log(credentials)

  
}

CreateAdvertisement=new FormGroup({
  role:new FormControl('',[Validators.required]),
  NewPrice:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
  OldPrice:new FormControl('',[Validators.pattern("^[0-9]*$")]),
  Discount:new FormControl('',[ Validators.required,Validators.pattern("^[0-9]*$")]),
  StartDate:new FormControl('',[ Validators.required]),
  EndDate:new FormControl('', [Validators.required, ] ),
  //countries : new FormControl('', [Validators.required, ] ),
})

getCatergory(){
  this.itemService.getCategories().subscribe(
    res=>{this.categories=res;
    },err=>{console.log(err);
    }
  )
}


  
}
