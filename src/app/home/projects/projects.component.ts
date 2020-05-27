import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: any[] = [
    {
      title: 'The Art of Cooking Salmon',
      subtitle: 'theartofcookingsalmon.com',
      logo: 'assets/Salmon-Logo.jpg',
      tech: 'Ionic, Angular, Firebase',
      description: 'Beautiful UI/UX in appreciate for a beautiful fish. Upload photos and share your favorite Salmon dishes.',
      website: 'https://theartofcookingsalmon.com',
      repo: 'https://github.com/Jappzy/salmon'
    },
    {
      title: 'Essentials Anonymous',
      subtitle: 'essentialsanonymous.com',
      logo: 'assets/Essentials-Anonymous-Logo.jpg',
      tech: 'Ionic, Capacitor, Angular, Firebase',
      description: 'Anonymous posts about essential working & coronavirus experiences with customizable theming for dark mode and colors',
      website: 'https://essentialsanonymous.com/',
      repo: 'https://github.com/Jappzy/essentials'
    },
    {
      title: 'Carona Balona',
      subtitle: 'caronabalona.com',
      logo: 'assets/Carona-Balona-Logo.jpg',
      tech: 'Svelte, Wired Elements, SVG-based Charts',
      description: 'The latest coronavirus data diplayed with cool charts and hand drawn UI elements',
      website: 'https://caronabalona.com/',
      repo: 'https://github.com/Jappzy/carona-balona'
    },
    {
      title: 'Menu Mash',
      subtitle: 'menumash.app',
      logo: 'assets/Menu-Mash-Logo.jpg',
      tech: 'Ionic, Capacitor, Angular, Firebase',
      description: 'Swipe-to-order menu items from local restaurants (Tinder for food) pulling data from EatStreet',
      website: 'https://menumash.app/',
      repo: 'https://github.com/Jappzy/menumash'
    },
    {
      title: 'Plebeian Deli',
      subtitle: 'plebieandeli.art',
      logo: 'assets/Plebeian-Deli-Logo.jpg',
      tech: 'Angular, Firebase, Stripe',
      description: 'Social network and marketplace for artists',
      website: 'https://plebeiandeli.art/',
      repo: 'https://github.com/Jappzy/plebeian-deli'
    },
    {
      title: 'Story Stuff Saved',
      subtitle: 'storystuffsaved.com',
      logo: 'assets/Story-Stuff-Saved-Logo.jpg',
      tech: 'Angular PWA, Firebase',
      description: 'Selling used technology products',
      website: 'https://storystuffsaved.com/',
      repo: 'https://github.com/Jappzy/storystuffsaved.com'
    }
  ];

  constructor() { }

  openNewTab(url: string) {
    window.open(url, '_blank');
  }
}
