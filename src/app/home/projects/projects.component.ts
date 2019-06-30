import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: any[] = [
    {
      title: 'Story Stuff Saved',
      subtitle: 'storystuffsaved.com',
      logo: 'assets/Story-Stuff-Saved-Logo.jpg',
      tech: 'PWA, Angular, Firebase',
      description: 'Selling used technology products',
      website: 'https://storystuffsaved.com/',
      repo: 'https://github.com/Jappzy/storystuffsaved.com'
    },
    {
      title: 'Menu Mash',
      subtitle: '*IN PROGRESS* menumash.app',
      logo: 'assets/jazzy-on-chair.jpg',
      tech: 'Ionic, Capacitor, Angular, Firebase, AdMob',
      description: 'Swipe-to-order menu items from local restaurants',
      website: 'https://menumash.app/',
      repo: 'https://github.com/Jappzy/menumash'
    }
  ];

  constructor() { }

  openNewTab(url: string) {
    window.open(url, '_blank');
  }
}
