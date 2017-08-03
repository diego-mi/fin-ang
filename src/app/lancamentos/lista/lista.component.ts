import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Operacao} from '../model/operacao';
import {OperacaoService} from '../operacao.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {
  operacoes: Operacao[];
  selectedOperacao: Operacao;

  constructor(private operacaoService: OperacaoService,
              private router: Router) {
  }

  getOperacoes(): void {
    this.operacaoService
      .getOperacaoes()
      .then(operacoes => this.operacoes = operacoes);
  }

  ngOnInit() {
    this.getOperacoes();
  }

  onSelect(operacao: Operacao): void {
    this.selectedOperacao = operacao;
  }

  gotoDetail(): void {
    this.router.navigate(['/lancamentos/adicionar/', this.selectedOperacao.id]);
  }

  add(name: string, categoria: string, valor: number): void {
    name = name.trim();
    categoria = categoria.trim();
    if (!name) { return; }
    if (!categoria) { return; }
    if (!valor) { return; }
    this.operacaoService.create(name, categoria, valor)
      .then(operacao => {
        this.operacoes.push(operacao);
        this.selectedOperacao = null;
      });
  }

  delete(operacao: Operacao): void {
    this.operacaoService
      .delete(operacao.id)
      .then(() => {
        this.operacoes = this.operacoes.filter(h => h !== operacao);
        if (this.selectedOperacao === operacao) { this.selectedOperacao = null; }
      });
  }

}
