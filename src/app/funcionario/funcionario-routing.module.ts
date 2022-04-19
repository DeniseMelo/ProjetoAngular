import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { ListarFuncionarioComponent } from './pages/listar-funcionario/listar-funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoFuncionarioComponent } from './pages/novo-funcionario/novo-funcionario.component';


const routes: Routes = [

  {
    path: 'novo-funcionario',
    component: NovoFuncionarioComponent
  },


  {
  path:'',
  pathMatch:'full',//quando o path é vazio , precisamos colocar o path full para que não dê um loop
  component: ListarFuncionarioComponent
  },

  {
  path: ':idFuncionario', //para receber um parâmetro pela rota, que neste caso, será o id de
  component: FuncionarioComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})


export class FuncionarioRoutingModule { }
