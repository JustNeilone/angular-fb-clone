import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from '../_models/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private postUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  getPost(id?: number): Observable<Post> {
    return this.http.get<Post>(this.postUrl + `${id}`);
  }
}
