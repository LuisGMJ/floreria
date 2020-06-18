import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';
import { analytics } from 'firebase';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private db: AngularFirestore) { 
    /* this.createProduct(); */
  }

  createProduct() {
    const newId = this.db.createId();
    const product = {
      id: newId,
      description: 'Regala bellas gerberas y astromelias color rosa, que alegrarán su día. Da color y luz a su vida obsequiándole este precioso arreglo floral. LolaFlora lo entrega el mismo día, para que puedas expresar con flores eso que sientes por dentro. ¡Exprésate con flores!',
      image: 'https://firebasestorage.googleapis.com/v0/b/floreria-53bd3.appspot.com/o/img%2Fproducts%2F28911245-984f-40a4-aa83-b12044a3400c.jpeg?alt=media&token=2ca55b8a-a3d2-44a7-85ac-91be18de7274',
      maincomponents: ['Gerberas'],
      price: 200,
      size: '70x40 cm, altura y ancho',
      title: 'Gerberas',
      type: '4',
      views: 211
    };
    return this.db.collection('arrangement').doc(newId).set(product);
  }

  getProductsData(page: number): Observable<any> {
    return this.db.collection<any>('arrangement', ref => {
      return ref.orderBy('views', 'desc').limit(3);
    }).
      valueChanges().pipe(
        map(data => {
          return data;
        })
      );
  }

  getProductsByType(id: string): Observable<any> {
    const data = this.db.collection('arrangement', ref => ref.where('type', '==', id)).valueChanges();
    return data;
  }

  getProduct(id: string): Observable<any> {
    const data = this.db.collection('arrangement', ref => ref.where('id', '==', id)).valueChanges();
    return data;
  }

  getProductTypeList(): Observable<any> {
    const data = this.db.collection('producttype').valueChanges().pipe(
      map(list => list[0])
    );
    return data;
  }
}
