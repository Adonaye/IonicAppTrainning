import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { QuestionService } from '../../ts/question.service';
import { FormularioInterface } from '../../models/formulario';
import { CategoriaInterface } from '../../models/categoria';
import { FormulariosProvider } from '../../providers/fire/formularios';
import { DropdownQuestion } from '../../ts/question-dropdown';
import { CheckboxQuestion } from '../../ts/question-checkbox';
import { TextboxQuestion } from '../../ts/question-textbox';
import { DateQuestion } from '../../ts/question-date';

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
  canLeave: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private qService: QuestionService,
    public formProv: FormulariosProvider
  ) {
    this.canLeave = false;
    this.categoria = this.navParams.get('categoria');
    this.formulario = this.navParams.get('formulario');
    this.questions = this.initQuestions(this.formulario.Campos);
    this.responseCallback = response => {
      this.canLeave = true;
      this.navCtrl.popToRoot();
    };
  }

  initQuestions(campos) {
    return campos.map(campo => {
      switch(campo.controlType) {
        case 'textbox':
          return new TextboxQuestion(campo);
        case 'checkbox':
          return new CheckboxQuestion(campo);
        case 'dropdown':
          return new DropdownQuestion(campo);
        case 'date':
          return new DateQuestion(campo);
      }
    }).sort((a, b) => a.order - b.order);
  }
  
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmar salida del formulario',
      message: '¿Está seguro que desea salir de la ventana? Se perderá toda la información no guardada',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.canLeave = false;
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.canLeave = true;
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    return alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormViewerPage');
  }

  ionViewCanLeave() {
    if(!this.canLeave)
        this.presentConfirm();
    return this.canLeave;
  }

}
