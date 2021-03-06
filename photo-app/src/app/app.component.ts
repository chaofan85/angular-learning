import { Component } from '@angular/core';
import { PhotoFetchService } from './photo-fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';

  imgUrl = '';

  constructor(private photoFetch: PhotoFetchService) {}

  onSearch() {
    this.photoFetch.fetchPhoto().subscribe((url) => {
      this.imgUrl = url;
    });
  }
}
