import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageScoreComponent } from './average-score.component';

describe('AverageScoreComponent', () => {
  let component: AverageScoreComponent;
  let fixture: ComponentFixture<AverageScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
