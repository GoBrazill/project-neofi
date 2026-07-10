import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainTechnologySection } from './blockchain-technology-section';

describe('BlockchainTechnologySection', () => {
  let component: BlockchainTechnologySection;
  let fixture: ComponentFixture<BlockchainTechnologySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockchainTechnologySection],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockchainTechnologySection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
