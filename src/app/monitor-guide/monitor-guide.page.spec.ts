import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitorGuidePage } from './monitor-guide.page';

describe('MonitorGuidePage', () => {
  let component: MonitorGuidePage;
  let fixture: ComponentFixture<MonitorGuidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonitorGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
