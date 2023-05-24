import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarFamiliarPage } from './agregar-familiar.page';

describe('AgregarFamiliarPage', () => {
  let component: AgregarFamiliarPage;
  let fixture: ComponentFixture<AgregarFamiliarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarFamiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
