import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: any[] = [
    {
      title: 'Menu Mash',
      subtitle: 'menumash.app',
      logo: 'assets/Menu-Mash-Logo.png',
      tech: 'Ionic, Capacitor, Angular, Firebase',
      description: 'Swipe-to-order menu items from local restaurants (Tinder for food)',
      website: 'https://menumash.app/',
      repo: 'https://github.com/Jappzy/menumash'
    },
    {
      title: 'Story Stuff Saved',
      subtitle: 'storystuffsaved.com',
      logo: 'assets/Story-Stuff-Saved-Logo.png',
      tech: 'Angular PWA, Firebase',
      description: 'Selling used technology products',
      website: 'https://storystuffsaved.com/',
      repo: 'https://github.com/Jappzy/storystuffsaved.com'
    },
    {
      title: 'Plebeian Deli',
      subtitle: 'plebieandeli.art',
      logo: 'assets/Plebeian-Deli-Logo.png',
      tech: 'Angular, Firebase, Stripe',
      description: 'Network for artists and galleries, marketplace and subscription payments',
      website: 'https://plebeiandeli.art/'
    }
  ];

  constructor() { }

  openNewTab(url: string) {
    window.open(url, '_blank');
  }
}
