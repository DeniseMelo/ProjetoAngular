import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()//deixe o injectable vazio e injetaremos no modulo funcionario.module
            //fica vazio,pois quero que apenas o modulo funcionário receba o metodo e não todos os modulos do projetoAngular


  export class IsNumberGuard implements CanActivate {


    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const idFuncionario = route.paramMap.get('idFuncionario');//vai retornar ou um valor nulo ou uma string

      //o valor não existe ou nao é um número, o tipo NaN é um número

      if(idFuncionario ==null || isNaN(Number(idFuncionario))){
        return false
      }else{
        return true
      }
  }

}



//CanActivate serve para dizer se o usuário pode ou não entrar na rota, é uma interface que obriga a implementar o método CanActivate
//  route: ActivatedRouteSnapshot:   recupera os parametros da rota, é o que será utilizado
