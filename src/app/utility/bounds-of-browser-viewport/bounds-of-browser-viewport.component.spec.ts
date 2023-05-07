import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundsOfBrowserViewportComponent } from './bounds-of-browser-viewport.component';

describe('BoundsOfBrowserViewportComponent', () => {
  let component: BoundsOfBrowserViewportComponent;
  let fixture: ComponentFixture<BoundsOfBrowserViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoundsOfBrowserViewportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoundsOfBrowserViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
