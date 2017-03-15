import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIconComponent } from './more-icon.component';

describe('MoreIconComponent', () => {
  let component: MoreIconComponent;
  let fixture: ComponentFixture<MoreIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
