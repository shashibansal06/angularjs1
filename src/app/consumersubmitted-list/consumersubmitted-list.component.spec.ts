import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersubmittedListComponent } from './consumersubmitted-list.component';

describe('ConsumersubmittedListComponent', () => {
  let component: ConsumersubmittedListComponent;
  let fixture: ComponentFixture<ConsumersubmittedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumersubmittedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumersubmittedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
