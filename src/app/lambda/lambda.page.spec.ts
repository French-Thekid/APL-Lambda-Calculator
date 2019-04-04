import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaPage } from './lambda.page';

describe('LambdaPage', () => {
  let component: LambdaPage;
  let fixture: ComponentFixture<LambdaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LambdaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LambdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
