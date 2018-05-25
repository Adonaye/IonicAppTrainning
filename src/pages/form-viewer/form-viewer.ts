import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionService } from '../../ts/question.service';
import { FormularioInterface } from '../../models/formulario';
import { CategoriaInterface } from '../../models/categoria';
import { FormulariosProvider } from '../../providers/fire/formularios';
import { DropdownQuestion } from '../../ts/question-dropdown';

/**
 * Generated class for the FormViewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form-viewer',
  templateUrl: 'form-viewer.html',
})
export class FormViewerPage {
  questions: any[];
  camposObs: any;
  categoria: CategoriaInterface;
  formulario: FormularioInterface;
  responseCallback: Function;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    qService: QuestionService,
    public formProv: FormulariosProvider
  ) {
    this.categoria = this.navParams.get('categoria');
    this.formulario = this.navParams.get('formulario');
    this.questions = this.formulario.Campos;
    this.responseCallback = response => {
      this.navCtrl.popToRoot();
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormViewerPage');
  }

}
