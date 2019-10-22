import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextListPage } from './context-list.page';

describe('ContextListPage', () => {
  let component: ContextListPage;
  let fixture: ComponentFixture<ContextListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
