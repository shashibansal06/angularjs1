import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSubscriptionComponent } from './setting-subscription.component';

describe('SettingSubscriptionComponent', () => {
  let component: SettingSubscriptionComponent;
  let fixture: ComponentFixture<SettingSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
