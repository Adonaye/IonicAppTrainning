import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  // formRef: 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.action = this.navParams.get('action');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormListPage');
  }

}
