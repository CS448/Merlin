import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneDisplayComponent } from './drone-display.component';

describe('DroneDisplayComponent', () => {
  let component: DroneDisplayComponent;
  let fixture: ComponentFixture<DroneDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
