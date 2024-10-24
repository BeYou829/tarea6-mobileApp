import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenrepagePage } from './genrepage.page';

describe('GenrepagePage', () => {
  let component: GenrepagePage;
  let fixture: ComponentFixture<GenrepagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
