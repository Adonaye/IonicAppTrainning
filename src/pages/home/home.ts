import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { FireProvider } from './../../providers/fire/fire'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public fire:FireProvider
  ) {
    this.items = this.fire.fetchCategories('prueba');
  }

}
