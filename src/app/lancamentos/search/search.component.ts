import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {OperacaoSearchService} from '../operacao-search.service';
import {Operacao} from '../model/operacao';

@Component({
  selector: 'app-lancamentos-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [OperacaoSearchService]
})
export class SearchComponent implements OnInit {
  operacoes: Observable<Operacao[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroSearchService: OperacaoSearchService,
              private router: Router) {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.operacoes = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty operacoes if there was no search term
        : Observable.of<Operacao[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Operacao[]>([]);
      });
  }

  gotoDetail(hero: Operacao): void {
    const link = ['/lancamentos/adicionar/', hero.id];
    this.router.navigate(link);
  }
}
