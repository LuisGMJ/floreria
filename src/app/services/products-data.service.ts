import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {


  constructor(private db: AngularFirestore) { }

  getProductsData(): Observable<any> {
    return this.db.collection<any>('/arrangement').
      valueChanges().pipe(
        map(data => {
          return data;
        })
      );
  }

  getProduct(id: string): Observable<any> {
    return this.db.collection('arrangement', ref => ref.where('id', '==', id)).valueChanges();
  }
}
