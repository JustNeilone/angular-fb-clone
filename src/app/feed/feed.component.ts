import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Post } from '../_models/post';
import { User } from '../_models/user';
import { DogService } from '../_services/dog.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  imgs: string[] = [];
  dataLoaded: boolean = false;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private dogService: DogService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        console.log(users);
      });

    this.postService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
        console.log(posts);
      });

    this.dogService.getImages()
      .subscribe(imgs => {
        this.imgs = imgs.message;
        console.log(imgs)
      })
      

      
    this.dataLoaded = true;
  }
}
