import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesterRelationsComponent } from './invester-relations.component';

describe('InvesterRelationsComponent', () => {
  let component: InvesterRelationsComponent;
  let fixture: ComponentFixture<InvesterRelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvesterRelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvesterRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
