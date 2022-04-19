import { FuncionarioHttpService } from './services/funcionario-http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { NovoFuncionarioComponent } from './pages/novo-funcionario/novo-funcionario.component';
import { MaterialModule } from '../material/material.module';
import { ListarFuncionarioComponent } from './pages/listar-funcionario/listar-funcionario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    NovoFuncionarioComponent,
    ListarFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    MaterialModule,
    HttpClientModule, /*porque aqui, pois as pastas declaradas estao aqui e nao declarados no ts do modulo principal */
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    FuncionarioHttpService
  ]
})
export class FuncionarioModule { }
