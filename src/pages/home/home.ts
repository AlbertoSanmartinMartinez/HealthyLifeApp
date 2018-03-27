import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { BlogService } from '../../providers/blog_service';
import { PostPage } from '../post/post'

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public posts: any = null;

  constructor(public navCtrl: NavController, public blogService: BlogService) {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getPosts().then(data => {
      this.posts = data;
    });
  }

  goToPost(post_id:string) {
    this.navCtrl.push(PostPage, {
      post_id: post_id,
    });
  }

  goToAuthor() {

  }
}
