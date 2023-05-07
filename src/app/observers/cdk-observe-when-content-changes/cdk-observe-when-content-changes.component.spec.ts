import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkObserveWhenContentChangesComponent } from './cdk-observe-when-content-changes.component';

describe('CdkObserveWhenContentChangesComponent', () => {
  let component: CdkObserveWhenContentChangesComponent;
  let fixture: ComponentFixture<CdkObserveWhenContentChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkObserveWhenContentChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkObserveWhenContentChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
