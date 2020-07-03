import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects$: Observable<any[]>;
  layoutChanges: Subscription;
  isSmallScreen: boolean;

  constructor(
    private projectService: ProjectService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.projects$ = this.projectService.getProjects();

    this.layoutChanges = this.breakpointObserver
      .observe(['(orientation: portrait)', '(orientation: landscape)'])
      .subscribe(res => {
        this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 777px)');
        console.log({ res, small: this.isSmallScreen });
      });
  }

  ngOnDestroy() {
    this.layoutChanges.unsubscribe();
  }

  openNewTab(url: string) {
    window.open(url, '_blank');
  }
}
