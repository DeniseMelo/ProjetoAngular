import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'
import {Funcionario}from '../models/funcionario';

@Injectable()

export class FuncionarioHttpService {

  private readonly baseURL = 'http://localhost:8080/servicos/funcionario'

  constructor(
    private http: HttpClient
  ) { }



  getFuncionarios(): Observable <Funcionario []> {
    return this.http.get<Funcionario[]>(this.baseURL)
  }

  getFuncionarioById(id:number): Observable <Funcionario> {
    return this.http.get<Funcionario>(`${this.baseURL}/${id}`)
  }//metodo que recupera um unico usuario pelo seu id para que ao clicar no funcionario apareca na nova pagina criada

}
