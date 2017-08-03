import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {LancamentosRoutingModule} from './lancamentos-routing.module';
import {ListaComponent} from './lista/lista.component';
import {FormComponent} from './form/form.component';
import {OperacaoService} from './operacao.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    LancamentosRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ListaComponent, FormComponent, SearchComponent],
  providers: [ OperacaoService ],
})
export class LancamentosModule {
}
