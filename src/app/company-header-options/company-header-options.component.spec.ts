import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHeaderOptionsComponent } from './company-header-options.component';

describe('CompanyHeaderOptionsComponent', () => {
  let component: CompanyHeaderOptionsComponent;
  let fixture: ComponentFixture<CompanyHeaderOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyHeaderOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyHeaderOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
