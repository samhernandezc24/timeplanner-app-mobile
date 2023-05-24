import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamiliarPage } from './familiar.page';

describe('FamiliarPage', () => {
  let component: FamiliarPage;
  let fixture: ComponentFixture<FamiliarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FamiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
