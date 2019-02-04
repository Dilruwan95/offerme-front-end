import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificAddComponent } from './specific-add.component';

describe('SpecificAddComponent', () => {
  let component: SpecificAddComponent;
  let fixture: ComponentFixture<SpecificAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
