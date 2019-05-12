import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTeaComponent } from './single-tea.component';

describe('SingleTeaComponent', () => {
  let component: SingleTeaComponent;
  let fixture: ComponentFixture<SingleTeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
