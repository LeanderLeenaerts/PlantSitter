import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/User'; 
import { Greenhouse } from '../models/Greenhouse';
import { Plant } from '../models/Plant';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  userCollection!: AngularFirestoreCollection<User>;
  users: Observable<any[]>

  greenhouseCollection!: AngularFirestoreCollection<Greenhouse>;
  greenhouses: Observable<any[]>;

  plantCollection!: AngularFirestoreCollection<Plant>
  plants: Observable<any[]>


  constructor(public afs: AngularFirestore) 
  {
    this.users = this.afs.collection('users').valueChanges();
    this.greenhouses = this.afs.collection('users/oWWajW5e8paKINCNuW5WuPN7lhJ2/Greenhouses').valueChanges();
    this.plants = this.afs.collection('users/oWWajW5e8paKINCNuW5WuPN7lhJ2/Greenhouses/FlW10npLhWBABvxUp0Fg/Plants').valueChanges();
  }

  getUsers()
  {
    return this.users;
  }

  getGreenhouses()
  {
    return this.greenhouses;
  }

  getPlants()
  {
    return this.plants
  }

}



