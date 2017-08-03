import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Operacao} from './model/operacao';

@Injectable()
export class OperacaoSearchService {

  constructor(private http: Http) {
  }

  search(term: string): Observable<Operacao[]> {
    return this.http
      .get(`api/operacoes/?name=${term}`)
      .map(response => response.json().data as Operacao[]);
  }
}
