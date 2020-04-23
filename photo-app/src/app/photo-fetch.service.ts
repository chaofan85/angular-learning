import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface ApiResonse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoFetchService {
  constructor(private http: HttpClient) {}

  fetchPhoto() {
    return this.http
      .get<ApiResonse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: 'Client-ID xxx',
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
