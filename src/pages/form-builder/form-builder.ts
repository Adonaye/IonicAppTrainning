import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QuestionService } from './../../ts/question.service';

/**
 * Generated class for the FormBuilderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form-builder',
  templateUrl: 'form-builder.html'
})
export class FormBuilderPage {
  questions: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, qService: QuestionService) {
    this.questions = qService.getQuestions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormBuilderPage');
  }

}
