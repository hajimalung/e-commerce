import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStrip } from './filter-strip';

describe('FilterStrip', () => {
  let component: FilterStrip;
  let fixture: ComponentFixture<FilterStrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterStrip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterStrip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
