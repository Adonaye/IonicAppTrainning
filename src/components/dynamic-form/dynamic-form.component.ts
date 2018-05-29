import { Component, Input, OnChanges, SimpleChange, OnInit } from "@angular/core";
import { QuestionBase } from './../../ts/question-base';
import { FormGroup } from "@angular/forms";

import { QuestionControlService } from "../../ts/question-control.service";
import { FireProvider } from "../../providers/fire/fire";
import { AlertController } from "ionic-angular";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "dynamic-form.component.html"
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Input() formulario: string;
  @Input() responseCallback: Function;
  form: FormGroup;
  payLoad = '';

  constructor(
    public qcs: QuestionControlService,
    public fire: FireProvider,
    private alertCtrl: AlertController
  ) {

  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  formatResponse(form) {
    let response = new Object();
    response['active'] = true;
    response['consecutivo'] = '001';
    response['formulario'] = this.formulario;
    response['data'] = new Array();
    for (let prop in form) {
      response['data'].push({
        name: prop,
        value: form[prop]
      })
    }
    response['fechaDeCreacion'] = Date.now();
    return response;
  }

  crearEntrada() {
    this.fire.createDocInColl('Entradas',
      this.formatResponse(this.form.value),
      response => {
        this.responseCallback(response);
      },
      error => {
        console.error(error);
      }
    )
  }

  onSubmit() {
    this.presentConfirm();
    // this.payLoad = this.form.value;
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmar envío de datos',
      message: '¿Está seguro que desea enviar las entradas de este formulario?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.crearEntrada();
          }
        }
      ]
    });
    alert.present();
  }
}
