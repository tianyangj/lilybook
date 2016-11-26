/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChipComposerComponent } from './chip-composer.component';

describe('ChipComposerComponent', () => {
  let component: ChipComposerComponent;
  let fixture: ComponentFixture<ChipComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
