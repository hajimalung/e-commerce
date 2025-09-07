import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectList } from './multi-select-list';

describe('MultiSelectList', () => {
  let component: MultiSelectList;
  let fixture: ComponentFixture<MultiSelectList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
