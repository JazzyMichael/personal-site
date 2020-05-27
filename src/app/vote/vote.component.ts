import { Component, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnDestroy {
  votes: any;
  voteSub: Subscription;
  update$: Subject<any> = new Subject();
  updateSub: Subscription;
  newThumbsUp: number;
  newStars: number;
  newHighFives: number;

  constructor(private vote: VoteService) {
    this.resetClicks();

    this.voteSub = this.vote.vote$.subscribe(votes => this.votes = votes);

    this.updateSub = this.update$.pipe(
      debounceTime(777)
    ).subscribe(() => {
      const toUpdate: any = {};

      if (this.newThumbsUp) toUpdate.thumbsUp = this.newThumbsUp + this.votes.thumbsUp;
      if (this.newStars) toUpdate.stars = this.newStars + this.votes.stars;
      if (this.newHighFives) toUpdate.highFives = this.newHighFives + this.votes.highFives;

      this.vote.update(toUpdate);

      this.resetClicks();
    });
  }

  ngOnDestroy() {
    this.voteSub.unsubscribe();
    this.updateSub.unsubscribe();
  }

  onVote(button: string) {
    this[button]++;
    if (this.votes) this.update$.next();
  }

  resetClicks() {
    this.newThumbsUp = 0;
    this.newStars = 0;
    this.newHighFives = 0;
  }
}
