import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicbtnComponent } from './musicbtn.component';

describe('MusicbtnComponent', () => {
  let component: MusicbtnComponent;
  let fixture: ComponentFixture<MusicbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
