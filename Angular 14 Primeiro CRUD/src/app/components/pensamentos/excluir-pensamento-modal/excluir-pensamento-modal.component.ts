import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-excluir-pensamento-modal',
  templateUrl: './excluir-pensamento-modal.component.html',
  styleUrls: ['./excluir-pensamento-modal.component.css']
})
export class ExcluirPensamentoModalComponent implements OnInit {

  pensamento!: Pensamento;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getPensamentoById(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.deletePensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/pensamentos'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/pensamentos'])
  }
}
