import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaFamiliaresPage } from './lista-familiares.page';

describe('ListaFamiliaresPage', () => {
  let component: ListaFamiliaresPage;
  let fixture: ComponentFixture<ListaFamiliaresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaFamiliaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
