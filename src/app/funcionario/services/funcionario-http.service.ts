import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'
import {Funcionario}from '../models/funcionario';

@Injectable()

export class FuncionarioHttpService {

  private readonly baseUrl = 'http://localhost:8080/servicos/funcionario'

  constructor(
    private http: HttpClient
  ) { }



  getFuncionarios(): Observable <Funcionario []> {
    return this.http.get<Funcionario[]>(this.baseUrl)
  }

}
