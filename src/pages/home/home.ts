import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FireProvider } from './../../providers/fire/fire'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:Array<any>;

  constructor(
    public navCtrl: NavController,
    public fire:FireProvider
  ) {
    this.items = fire.fetchCategories('prueba');
  }

}
