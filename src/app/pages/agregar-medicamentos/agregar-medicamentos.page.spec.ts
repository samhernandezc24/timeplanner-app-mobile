import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarMedicamentosPage } from './agregar-medicamentos.page';

describe('AgregarMedicamentosPage', () => {
  let component: AgregarMedicamentosPage;
  let fixture: ComponentFixture<AgregarMedicamentosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarMedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
