import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CarouselDataService {

  constructor(private db: AngularFirestore) { }

  getCarouselData(): Observable<any> {
    return this.db.collection<any>('/carousel').
      valueChanges().pipe(
        map(data => {
          return data[0];
        })
      );
  }
}
