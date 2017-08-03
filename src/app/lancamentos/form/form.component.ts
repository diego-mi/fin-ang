import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {Operacao} from '../model/operacao';
import {OperacaoService} from '../operacao.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(private operacaoService: OperacaoService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  @Input() operacao: Operacao;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.operacaoService.getOperacao(+params.get('id')))
      .subscribe(operacao => this.operacao = operacao);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.operacaoService.update(this.operacao)
      .then(() => this.goBack());
  }
}
