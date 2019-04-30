import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTransactionComponent } from './setting-transaction.component';

describe('SettingTransactionComponent', () => {
  let component: SettingTransactionComponent;
  let fixture: ComponentFixture<SettingTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
