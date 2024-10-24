import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordpresspagePage } from './wordpresspage.page';

describe('WordpresspagePage', () => {
  let component: WordpresspagePage;
  let fixture: ComponentFixture<WordpresspagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpresspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
