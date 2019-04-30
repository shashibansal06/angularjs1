import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbardHeaderComponent } from './dashbard-header.component';

describe('DashbardHeaderComponent', () => {
  let component: DashbardHeaderComponent;
  let fixture: ComponentFixture<DashbardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
