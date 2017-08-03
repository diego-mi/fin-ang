import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const operacoes = [
      {id: 0, name: 'Zero', categoria: 'Essencial', valor: 20},
      {id: 11, name: 'Mr. Nice', categoria: 'Essencial', valor: 20},
      {id: 12, name: 'Narco', categoria: 'Essencial', valor: 20},
      {id: 13, name: 'Bombasto', categoria: 'Essencial', valor: 20},
      {id: 14, name: 'Celeritas', categoria: 'Essencial', valor: 20},
      {id: 15, name: 'Magneta', categoria: 'Essencial', valor: 20},
      {id: 16, name: 'RubberMan', categoria: 'Essencial', valor: 20},
      {id: 17, name: 'Dynama', categoria: 'Essencial', valor: 20},
      {id: 18, name: 'Dr IQ', categoria: 'Essencial', valor: 20},
      {id: 19, name: 'Magma', categoria: 'Essencial', valor: 20},
      {id: 20, name: 'Tornado', categoria: 'Essencial', valor: 20}
    ];
    return {operacoes};
  }
}
