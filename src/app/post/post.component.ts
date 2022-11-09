import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../_services/dog.service';
import { Post } from '../_models/post';
import { PostService } from '../_services/post.service';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  post?: Post;
  user?: User;
  img?: string;
  dataLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService,
    private dogService: DogService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPost();
    this.getImage();
    this.dataLoaded = true;
  }

  getUser(id: number): void {
    //const userId = Number(this.route.snapshot.paramMap.get("userid"));
    
      this.userService.getUser(id)
        .subscribe(user => {
          console.log(user);
          this.user = user;
        });
  }

  getPost(): void {
    const postId = Number(this.route.snapshot.paramMap.get("id"));
    this.postService.getPost(postId)
      .subscribe(post => {
        console.log(post);
        this.post = post;
        this.getUser(post.userId);
      });
  }

  getImage(): void {
    this.dogService.getImage()
      .subscribe(img => {
        console.log(img);
        this.img = img.message;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
