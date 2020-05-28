import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GeneralDataService {

  constructor(private db: AngularFirestore) { }

  getData(): Observable<any> {
    return this.db.collection<any>('/generaldata').
      valueChanges().pipe(
        map(data => console.log(data))
      );
  }
}
