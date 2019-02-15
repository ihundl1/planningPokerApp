import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterEggPage } from './easter-egg.page';

describe('EasterEggPage', () => {
  let component: EasterEggPage;
  let fixture: ComponentFixture<EasterEggPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasterEggPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasterEggPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
