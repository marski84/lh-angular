import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyComponentComponent } from './edit-company-component.component';

describe('EditCompanyComponentComponent', () => {
  let component: EditCompanyComponentComponent;
  let fixture: ComponentFixture<EditCompanyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompanyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompanyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
