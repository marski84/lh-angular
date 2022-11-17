import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompanyComponentComponent } from './new-company-component.component';

describe('NewCompanyComponentComponent', () => {
  let component: NewCompanyComponentComponent;
  let fixture: ComponentFixture<NewCompanyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompanyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompanyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
