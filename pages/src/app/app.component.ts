import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80'
    },
    {
      title: 'In the city',
      url:
        'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Green grass',
      url:
        'https://images.unsplash.com/photo-1558552709-7c68bf76b9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
    },
    {
      title: 'In the forest',
      url:
        'https://images.unsplash.com/photo-1558974708-a164926a5a83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
    }
  ];
}
