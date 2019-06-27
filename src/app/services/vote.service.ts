import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  vote$: BehaviorSubject<any>;
  buttonVotes: any = { thumbsUp: 0, stars: 0, highFives: 0 };

  constructor(private afStore: AngularFirestore) {
    const cachedVotes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : null;

    this.vote$ = new BehaviorSubject(cachedVotes);

    this.afStore.doc('votes/buttons').valueChanges()
      .subscribe(buttonVotes => {
        this.buttonVotes = buttonVotes;
        this.vote$.next({ ...this.buttonVotes, buttonVotes });
        localStorage.setItem('votes', JSON.stringify(buttonVotes));
      });
  }

  async update(totalVotes) {
    await this.afStore.doc('votes/buttons').update(totalVotes);
  }
}
