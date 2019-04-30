import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamReportDetailComponent } from './team-report-detail.component';

describe('TeamReportDetailComponent', () => {
  let component: TeamReportDetailComponent;
  let fixture: ComponentFixture<TeamReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
