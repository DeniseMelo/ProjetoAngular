import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { Funcionario } from '../../models/funcionario';
import { FuncionarioHttpService } from '../../services/funcionario-http.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

idFuncionario!: number | null
funcionario!: Funcionario



  constructor(
    //é um objeto do roteamento que permite recuperar os parametros de uma rota
    private route: ActivatedRoute,
    private funhttpService: FuncionarioHttpService
  ) { }

  ngOnInit(): void {
    this.idFuncionario = parseInt(this.route.snapshot.paramMap.get('idFuncionario')|| '')

  this.funhttpService.getFuncionarioById(this.idFuncionario)
  .subscribe(
    (fun)=>{
      this.funcionario = fun
    }
  )

  }

}
