import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneDetailComponent } from './drone-detail.component';

describe('DroneDetailComponent', () => {
  let component: DroneDetailComponent;
  let fixture: ComponentFixture<DroneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
