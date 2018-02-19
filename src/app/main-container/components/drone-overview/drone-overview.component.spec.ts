import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneOverviewComponent } from './drone-overview.component';

describe('DroneOverviewComponent', () => {
  let component: DroneOverviewComponent;
  let fixture: ComponentFixture<DroneOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
