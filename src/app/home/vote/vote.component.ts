import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnDestroy {
  loggedIn: boolean;
  user: any;
  userSub: Subscription;
  update$: Subject<any> = new Subject();
  updateSub: Subscription;
  newThumbsUp: number;
  newStars: number;
  newHighFives: number;

  constructor(private auth: AuthService) {
    this.resetClicks();

    this.userSub = this.auth.user$.subscribe(user => {
      this.user = user;
      this.loggedIn = user ? true : false;
    });

    this.updateSub = this.update$.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      let toUpdate = {};
      if (this.newThumbsUp) toUpdate['thumbsUp'] = this.newThumbsUp;
      if (this.newStars) toUpdate['stars'] = this.newStars;
      if (this.newHighFives) toUpdate['highFives'] = this.newHighFives;

      console.log('toUpdate', toUpdate);

      // Update User

      // Update Votes

      this.resetClicks();
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.updateSub.unsubscribe();
  }

  onVote(button: string) {
    this[button]++;
    this.update$.next();
  }

  resetClicks() {
    this.newThumbsUp = 0;
    this.newStars = 0;
    this.newHighFives = 0;
  }
}
