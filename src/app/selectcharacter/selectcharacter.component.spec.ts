import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcharacterComponent } from './selectcharacter.component';

describe('SelectcharacterComponent', () => {
  let component: SelectcharacterComponent;
  let fixture: ComponentFixture<SelectcharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectcharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
