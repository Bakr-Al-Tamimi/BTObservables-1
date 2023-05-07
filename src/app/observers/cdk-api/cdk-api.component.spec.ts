import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkApiComponent } from './cdk-api.component';

describe('CdkApiComponent', () => {
  let component: CdkApiComponent;
  let fixture: ComponentFixture<CdkApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
