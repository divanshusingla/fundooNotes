import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAddIconComponent } from './person-add-icon.component';

describe('PersonAddIconComponent', () => {
  let component: PersonAddIconComponent;
  let fixture: ComponentFixture<PersonAddIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonAddIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAddIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
