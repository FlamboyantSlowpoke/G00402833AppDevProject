import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LizardGuidePage } from './lizard-guide.page';

describe('LizardGuidePage', () => {
  let component: LizardGuidePage;
  let fixture: ComponentFixture<LizardGuidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LizardGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
