import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPlateIconComponent } from './color-plate-icon.component';

describe('ColorPlateIconComponent', () => {
  let component: ColorPlateIconComponent;
  let fixture: ComponentFixture<ColorPlateIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPlateIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPlateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
