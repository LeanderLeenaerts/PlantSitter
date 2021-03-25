import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import firebase from 'firebase/app'

import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from "rxjs";
import { switchMap } from 'rxjs/operators';
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null | undefined>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
   }

   async googleSignin() {
     const provider = new firebase.auth.GoogleAuthProvider();
     //const creds = await this.afAuth.signInWithPopup(provider);
     //return this.updateUserData(creds.user);
     const cred = await this.afAuth.signInWithPopup(provider);

     if (cred.user != null) {
      return this.updateUserData(cred.user.uid, cred.user.email, cred.user.displayName, cred.user.photoURL);
     }
   }

   async signOut() {
     await this.afAuth.signOut();
     return this.router.navigate(['/']);
   }

   private updateUserData(uid: string, email: string | null, displayName: string | null, photoURL: string | null) {
     const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

     if (email != null && displayName != null && photoURL != null) {
        const data = {
          uid,
          email: email?.toString(),
          displayName: displayName?.toString(),
          photoURL: photoURL?.toString()
        };
  
        return userRef.set(data, {merge: true});
     }

     return null;
   }
}
