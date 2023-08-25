import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReptileSurveyPage } from './reptile-survey.page';

describe('ReptileSurveyPage', () => {
  let component: ReptileSurveyPage;
  let fixture: ComponentFixture<ReptileSurveyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReptileSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
