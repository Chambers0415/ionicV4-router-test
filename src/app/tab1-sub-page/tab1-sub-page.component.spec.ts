import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1SubPageComponent } from './tab1-sub-page.component';

describe('Tab1SubPageComponent', () => {
  let component: Tab1SubPageComponent;
  let fixture: ComponentFixture<Tab1SubPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1SubPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1SubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
