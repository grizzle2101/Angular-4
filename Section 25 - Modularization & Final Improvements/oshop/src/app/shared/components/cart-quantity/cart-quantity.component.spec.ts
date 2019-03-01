import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartQuantityComponent } from './cart-quantity.component';

describe('CartQuantityComponent', () => {
  let component: CartQuantityComponent;
  let fixture: ComponentFixture<CartQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
