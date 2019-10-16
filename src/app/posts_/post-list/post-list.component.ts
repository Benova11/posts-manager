import { Component , OnInit, OnDestroy } from '@angular/core';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  /*
  posts = [
    { title: 'First Post' , content: 'this is the first post\'s content' },
    { title: 'Second Post' , content: 'this is the second post\'s content' },
    { title: 'Third Post' , content: 'this is the third post\'s content' }
  ];
  */
 posts: Post[] = [];
 isLoading = false;
 postsSubscription: Subscription;

 constructor(public postsService: PostsService) {
 }

 ngOnInit() {
    this.postsService.getPosts();
    this.isLoading = true;
    this.postsSubscription = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
 }

 onDelete(postId: string) {
  this.postsService.deletePost(postId);
 }

 ngOnDestroy() {
   this.postsSubscription.unsubscribe();
 }

}
