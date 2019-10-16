import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanormaIconComponent } from './panorma-icon.component';

describe('PanormaIconComponent', () => {
  let component: PanormaIconComponent;
  let fixture: ComponentFixture<PanormaIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanormaIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanormaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
