import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';
import { BehaviorSubject, of, empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: BehaviorSubject<any>;;

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router
    ) {
      const cachedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

      this.user$ = new BehaviorSubject(cachedUser);

      this.afAuth.authState.pipe(
        switchMap((user: any) => user && !user.isAnonymous
          ? this.afStore.doc<any>(`users/${user.uid}`).valueChanges()
          : user ? of(user) : of(null)),
        catchError(error => {
          console.log('uh oh, something went horribly wrong', error);
          return empty();
        })
      ).subscribe(user => {
        console.log('subscribe', user);
        if (user) {
          this.user$.next(user);
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          this.user$.next(null);
          localStorage.removeItem('user');
        }
      });
  }

  async loginWithGoogle() {
    const authData = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    if (authData && authData.additionalUserInfo && authData.additionalUserInfo.isNewUser) {
      await this.createUserDoc(authData.user);
    }
    return this.router.navigateByUrl('/profile');
  }

  async loginAnonymously() {
    const anon = await this.afAuth.auth.signInAnonymously();
    console.log('anonymous', anon);
    return this.router.navigateByUrl('/');
  }

  async logout() {
    await this.afAuth.auth.signOut();
    return this.router.navigateByUrl('/');
  }

  createUserDoc({ uid, displayName, email, phoneNumber, photoURL }) {
    const userDoc = this.afStore.doc(`users/${uid}`);

    const data = {
      uid,
      displayName,
      email,
      phoneNumber,
      photoURL,
      thumbsUp: 0,
      stars: 0,
      highFives: 0
    };

    return userDoc.set(data);
  }

  updateUserDoc(uid: string, buttons: any) {
    return this.afStore.doc(`users/${uid}`).set(buttons);
  }
}
