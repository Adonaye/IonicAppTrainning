import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FireProvider } from './fire';
import { QueryFn } from 'angularfire2/firestore';
import { CategoriaInterface } from '../../models/categoria';
import { FormularioInterface } from '../../models/formulario';

@Injectable()
export class FormulariosProvider {

  constructor(
    public fire:FireProvider,
  ) {
    
  }
  
  fetch() {
    let fomrulariosColl = this.fire.fetchCollection('Formularios');
    var itemsObservable = fomrulariosColl.snapshotChanges();
    return itemsObservable;
  }

  fetchWithQuery(fn: QueryFn) {
    let fomrulariosColl = this.fire.fetchCollectionWithQuery('Formularios', fn);
    var items = fomrulariosColl.snapshotChanges();
    return items;
  }

  fetchByCategoriaId(categoriaId: string) {
    return this.fetchWithQuery(
      ref => ref.where('categoriaId', '==', categoriaId)
                .orderBy('nombre')
    );
  }

  fetchCampos(formulario: FormularioInterface) {
    return this.fire.fetchDocument('Formularios', formulario.id).collection('Campos');
  }

}
