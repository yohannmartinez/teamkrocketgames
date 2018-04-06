import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatmortelComponent } from './combatmortel.component';

describe('CombatmortelComponent', () => {
  let component: CombatmortelComponent;
  let fixture: ComponentFixture<CombatmortelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatmortelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatmortelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
