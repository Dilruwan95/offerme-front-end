import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-notlog',
  templateUrl: './navbar-notlog.component.html',
  styleUrls: ['./navbar-notlog.component.scss']
})
export class NavbarNotlogComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
