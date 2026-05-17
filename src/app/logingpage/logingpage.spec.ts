import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logingpage } from './logingpage';

describe('Logingpage', () => {
  let component: Logingpage;
  let fixture: ComponentFixture<Logingpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logingpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Logingpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
