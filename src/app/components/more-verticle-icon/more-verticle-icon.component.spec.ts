import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreVerticleIconComponent } from './more-verticle-icon.component';

describe('MoreVerticleIconComponent', () => {
  let component: MoreVerticleIconComponent;
  let fixture: ComponentFixture<MoreVerticleIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreVerticleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreVerticleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
