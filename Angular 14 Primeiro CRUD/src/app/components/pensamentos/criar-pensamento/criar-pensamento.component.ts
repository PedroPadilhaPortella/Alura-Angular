import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  criarPensamento() {
    this.pensamentoService.createPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['pensamentos'])
    })
  }

  cancelar() {
    this.router.navigate(['pensamentos'])
  }
}
