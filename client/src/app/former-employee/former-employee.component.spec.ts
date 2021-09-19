import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerEmployeeComponent } from './former-employee.component';

describe('FormerEmployeeComponent', () => {
  let component: FormerEmployeeComponent;
  let fixture: ComponentFixture<FormerEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormerEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
