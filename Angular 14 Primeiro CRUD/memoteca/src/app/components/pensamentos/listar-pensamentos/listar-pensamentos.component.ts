import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private pensamentoService: PensamentoService) { }
  
  ngOnInit(): void {
    this.pensamentoService.getPensamentos().subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }
}
