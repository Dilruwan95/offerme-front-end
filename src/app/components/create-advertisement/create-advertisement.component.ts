import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.scss']
})
export class CreateAdvertisementComponent implements OnInit {
    
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
 
  constructor(private afStorage: AngularFireStorage) { }

  upload(event){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
  
  }

  ngOnInit() {
  }

  form = new FormControl({
    NewPrice:new FormControl(),
    OldPrice:new FormControl(),
    Discount:new FormControl(),
    StartDate:new FormControl(),
    EndDate:new FormControl(),
  })
  
}
