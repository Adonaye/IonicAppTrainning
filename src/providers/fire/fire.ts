import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { 
  AngularFirestore, 
  AngularFirestoreDocument, 
  AngularFirestoreCollection 
} from 'angularfire2/firestore';

/*
  Generated class for the FireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireProvider {

  constructor(
    public db:AngularFirestore,
  ) {
    
  }
  
  fetchCategories(path:string) {
    let collection = this.db.collection(path);
    var items = collection.valueChanges();
    return items;
  }

}
