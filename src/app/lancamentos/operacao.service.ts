import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Operacao} from './model/operacao';

@Injectable()
export class OperacaoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private operacoesUrl = 'api/operacoes';  // URL to web api

  constructor(private http: Http) {
  }

  getOperacaoes(): Promise<Operacao[]> {
    return this.http.get(this.operacoesUrl)
      .toPromise()
      .then(response => response.json().data as Operacao[])
      .catch(this.handleError);
  }


  getOperacao(id: number): Promise<Operacao> {
    const url = `${this.operacoesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Operacao)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.operacoesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string, categoria: string, valor: number): Promise<Operacao> {
    return this.http
      .post(this.operacoesUrl, JSON.stringify({name: name, categoria: categoria, valor: valor}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Operacao)
      .catch(this.handleError);
  }

  update(operacao: Operacao): Promise<Operacao> {
    const url = `${this.operacoesUrl}/${operacao.id}`;
    return this.http
      .put(url, JSON.stringify(operacao), {headers: this.headers})
      .toPromise()
      .then(() => operacao)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
