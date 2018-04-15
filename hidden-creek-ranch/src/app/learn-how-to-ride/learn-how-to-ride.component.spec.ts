import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnHowToRideComponent } from './learn-how-to-ride.component';

describe('LearnHowToRideComponent', () => {
  let component: LearnHowToRideComponent;
  let fixture: ComponentFixture<LearnHowToRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnHowToRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnHowToRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
