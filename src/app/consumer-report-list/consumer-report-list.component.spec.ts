import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerReportListComponent } from './consumer-report-list.component';

describe('ConsumerReportListComponent', () => {
  let component: ConsumerReportListComponent;
  let fixture: ComponentFixture<ConsumerReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
