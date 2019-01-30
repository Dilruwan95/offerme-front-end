import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelRegComponent } from './model-reg.component';

describe('ModelRegComponent', () => {
  let component: ModelRegComponent;
  let fixture: ComponentFixture<ModelRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
