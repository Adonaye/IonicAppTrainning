import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { 
  AngularFirestore, 
  AngularFirestoreDocument, 
  AngularFirestoreCollection 
} from 'angularfire2/firestore';

@Injectable()
export class FireProvider {

  constructor(
    public db:AngularFirestore,
  ) {
    
  }
  
  fetchCollection(path:string) {
    return this.db.collection(path);
  }
}
