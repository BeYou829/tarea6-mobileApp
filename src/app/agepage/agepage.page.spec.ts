import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgepagePage } from './agepage.page';

describe('AgepagePage', () => {
  let component: AgepagePage;
  let fixture: ComponentFixture<AgepagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
