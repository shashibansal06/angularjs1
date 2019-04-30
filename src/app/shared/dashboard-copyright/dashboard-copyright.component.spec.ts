import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCopyrightComponent } from './dashboard-copyright.component';

describe('DashboardCopyrightComponent', () => {
  let component: DashboardCopyrightComponent;
  let fixture: ComponentFixture<DashboardCopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
