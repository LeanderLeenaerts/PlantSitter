import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/User'; 

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  userCollection!: AngularFirestoreCollection<User>;
  users: Observable<any[]>


  constructor(public afs: AngularFirestore) 
  {
    this.users = this.afs.collection('users').valueChanges();
  }

  getUsers()
  {
    return this.users;
  }
}


