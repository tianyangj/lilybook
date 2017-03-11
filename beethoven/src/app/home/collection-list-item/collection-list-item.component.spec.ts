import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionListItemComponent } from './collection-list-item.component';

describe('CollectionListItemComponent', () => {
  let component: CollectionListItemComponent;
  let fixture: ComponentFixture<CollectionListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
