import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomviewPage } from './roomview.page';

describe('RoomviewPage', () => {
  let component: RoomviewPage;
  let fixture: ComponentFixture<RoomviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
