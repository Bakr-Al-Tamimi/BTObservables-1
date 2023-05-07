import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDataArrayComponent } from './items-data-array.component';

describe('ItemsDataArrayComponent', () => {
  let component: ItemsDataArrayComponent;
  let fixture: ComponentFixture<ItemsDataArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsDataArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsDataArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
