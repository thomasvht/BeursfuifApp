import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Product } from '../entities/product.entity';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private httpClient: HttpClient,
    private firestore: AngularFirestore) { }

  getProducts() {
    return this.firestore.collection("products").snapshotChanges()
      .pipe(map(actionArray => actionArray.map(
        item => {
          let product: Product = item.payload.doc.data() as Product;
          return { id: item.payload.doc.id, ...product };
        }
      )
      )
      );
  }

  addProduct(data) {
    delete data.id;
    this.firestore.collection("products").add(data);
  }

  updateProduct(data, id) {
    delete data.id;
    this.firestore.doc('products/' + id).update(data);
  }

  deleteProduct(id) {
    this.firestore.doc('products/'+ id).delete();
  }
}
