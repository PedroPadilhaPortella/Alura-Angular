import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoModalComponent } from './components/pensamentos/excluir-pensamento-modal/excluir-pensamento-modal.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pensamentos',
    pathMatch: 'full'
  },
  {
    path: 'pensamentos',
    component: ListarPensamentosComponent
  },
  {
    path: 'pensamentos/novo',
    component: CriarPensamentoComponent
  },
  {
    path: 'pensamentos/excluir/:id',
    component: ExcluirPensamentoModalComponent
  },
  {
    path: 'pensamentos/editar/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }