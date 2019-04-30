import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPaymentsComponent } from './setting-payments.component';

describe('SettingPaymentsComponent', () => {
  let component: SettingPaymentsComponent;
  let fixture: ComponentFixture<SettingPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
