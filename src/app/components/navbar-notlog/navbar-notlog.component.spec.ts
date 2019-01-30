import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNotlogComponent } from './navbar-notlog.component';

describe('NavbarNotlogComponent', () => {
  let component: NavbarNotlogComponent;
  let fixture: ComponentFixture<NavbarNotlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarNotlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNotlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
