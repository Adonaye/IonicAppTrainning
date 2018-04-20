import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FireProvider } from './fire';

@Injectable()
export class CategoriasProvider {

  constructor(
    public fire:FireProvider,
  ) {
    
  }
  
  fetch() {
    let categoriasColl = this.fire.fetchCollection('Categorias');
    var items = categoriasColl.snapshotChanges();
    return items;
  }

}
