import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-specific-add',
  templateUrl: './specific-add.component.html',
  styleUrls: ['./specific-add.component.scss']
})
export class SpecificAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  CreateAdvertisement=new FormGroup({
    role:new FormControl('',[Validators.required]),
    NewPrice:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    OldPrice:new FormControl('',[Validators.pattern("^[0-9]*$")]),
    Discount:new FormControl('',[ Validators.required,Validators.pattern("^[0-9]*$")]),
    StartDate:new FormControl('',[ Validators.required]),
    EndDate:new FormControl('', [Validators.required, ] ),
    roll : new FormControl('', [Validators.required, ] ),
  })

}
