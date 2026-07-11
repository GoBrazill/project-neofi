import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolutonarySection } from './revolutonary-section';

describe('RevolutonarySection', () => {
  let component: RevolutonarySection;
  let fixture: ComponentFixture<RevolutonarySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevolutonarySection],
    }).compileComponents();

    fixture = TestBed.createComponent(RevolutonarySection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
