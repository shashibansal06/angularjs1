import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerReportdetailComponent } from './consumer-reportdetail.component';

describe('ConsumerReportdetailComponent', () => {
  let component: ConsumerReportdetailComponent;
  let fixture: ComponentFixture<ConsumerReportdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerReportdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerReportdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
