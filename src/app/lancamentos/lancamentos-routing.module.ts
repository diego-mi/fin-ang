import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListaComponent} from './lista/lista.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
  {path: 'lancamentos/lista', component: ListaComponent},
  // {path: 'lancamentos/adicionar', component: FormComponent},
  {path: 'lancamentos/adicionar/:id', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule {
}
