import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoercingInputIntoSpecificTypesComponent } from './coercing-input-into-specific-types.component';

describe('CoercingInputIntoSpecificTypesComponent', () => {
  let component: CoercingInputIntoSpecificTypesComponent;
  let fixture: ComponentFixture<CoercingInputIntoSpecificTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoercingInputIntoSpecificTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoercingInputIntoSpecificTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
