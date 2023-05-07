import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkObserverComponent } from './cdk-observer.component';

describe('CdkObserverComponent', () => {
  let component: CdkObserverComponent;
  let fixture: ComponentFixture<CdkObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkObserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
