import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAchivementComponent } from './company-achivement.component';

describe('CompanyAchivementComponent', () => {
  let component: CompanyAchivementComponent;
  let fixture: ComponentFixture<CompanyAchivementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAchivementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAchivementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
