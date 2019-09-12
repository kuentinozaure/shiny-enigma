import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbviewerComponent } from './dbviewer.component';

describe('DbviewerComponent', () => {
  let component: DbviewerComponent;
  let fixture: ComponentFixture<DbviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
