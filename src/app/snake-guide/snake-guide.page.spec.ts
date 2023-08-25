import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnakeGuidePage } from './snake-guide.page';

describe('SnakeGuidePage', () => {
  let component: SnakeGuidePage;
  let fixture: ComponentFixture<SnakeGuidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SnakeGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
