import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/Item'; 


@Injectable({
  providedIn: 'root'
})
export class ReadService {

  itemsCollection!: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>


  constructor(public afs: AngularFirestore) 
  {
      this.items = this.afs.collection('greenhouses').valueChanges();
  }

  getItems()
  {
    return this.items;
  }
}


