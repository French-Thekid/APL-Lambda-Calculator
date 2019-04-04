import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievePage } from './recieve.page';

describe('RecievePage', () => {
  let component: RecievePage;
  let fixture: ComponentFixture<RecievePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
