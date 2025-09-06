import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityController } from './quantity-controller';

describe('QuantityController', () => {
  let component: QuantityController;
  let fixture: ComponentFixture<QuantityController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityController]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantityController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
