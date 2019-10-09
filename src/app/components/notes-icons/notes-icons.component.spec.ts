import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesIconsComponent } from './notes-icons.component';

describe('NotesIconsComponent', () => {
  let component: NotesIconsComponent;
  let fixture: ComponentFixture<NotesIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
