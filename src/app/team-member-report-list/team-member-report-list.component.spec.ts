import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberReportListComponent } from './team-member-report-list.component';

describe('TeamMemberReportListComponent', () => {
  let component: TeamMemberReportListComponent;
  let fixture: ComponentFixture<TeamMemberReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
