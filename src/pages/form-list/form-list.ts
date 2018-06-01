import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Categoria, CategoriaInterface } from '../../models/categoria';
import { FormulariosProvider } from '../../providers/fire/formularios';
import { FormViewerPage } from '../form-viewer/form-viewer';

/**
 * Generated class for the FormListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form-list',
  templateUrl: 'form-list.html',
})
export class FormListPage {
  categoria: CategoriaInterface;
  formularios: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formProv: FormulariosProvider
  ) {
    this.categoria = this.navParams.get('categoria');
    this.fetchFormulariosByCategoriaId(this.categoria.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormListPage');
  }

  openFormulario(formulario) {
    this.navCtrl.push(FormViewerPage, { categoria: this.categoria, formulario: formulario });
  }

  fetchFormulariosByCategoriaId(categoriaId: string, callback?: Function) {
    let formulariosObservable = this.formProv.fetchByCategoriaId(this.categoria.id);
    formulariosObservable.subscribe(
      formularios => {
        this.formularios = formularios.map(
          formulario => {
            return {id: formulario.payload.doc.id, ...formulario.payload.doc.data()}
          }
        );
        callback ? callback() : null;
      }
    );
  }

  doRefresh(refresher) {
    this.formularios = null;
    this.fetchFormulariosByCategoriaId(this.categoria.id, () => {
      refresher.complete();
    });
  }
}
