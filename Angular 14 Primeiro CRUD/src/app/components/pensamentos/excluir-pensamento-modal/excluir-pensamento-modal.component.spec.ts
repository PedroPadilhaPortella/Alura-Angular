import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPensamentoModalComponent } from './excluir-pensamento-modal.component';

describe('ExcluirPensamentoModalComponent', () => {
  let component: ExcluirPensamentoModalComponent;
  let fixture: ComponentFixture<ExcluirPensamentoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirPensamentoModalComponent]
    });
    fixture = TestBed.createComponent(ExcluirPensamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
