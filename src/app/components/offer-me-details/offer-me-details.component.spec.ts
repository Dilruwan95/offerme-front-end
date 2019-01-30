import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferMeDetailsComponent } from './offer-me-details.component';

describe('OfferMeDetailsComponent', () => {
  let component: OfferMeDetailsComponent;
  let fixture: ComponentFixture<OfferMeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferMeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferMeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
