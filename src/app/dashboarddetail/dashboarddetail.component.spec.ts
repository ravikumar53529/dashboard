import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarddetailComponent } from './dashboarddetail.component';

describe('DashboarddetailComponent', () => {
  let component: DashboarddetailComponent;
  let fixture: ComponentFixture<DashboarddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarddetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
