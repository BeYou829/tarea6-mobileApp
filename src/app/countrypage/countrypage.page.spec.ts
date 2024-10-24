import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountrypagePage } from './countrypage.page';

describe('CountrypagePage', () => {
  let component: CountrypagePage;
  let fixture: ComponentFixture<CountrypagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
