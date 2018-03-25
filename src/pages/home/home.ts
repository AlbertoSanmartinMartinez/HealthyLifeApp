import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { BlogService } from '../../providers/blog_service';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public posts: any;

  constructor(public navCtrl: NavController, public blogService: BlogService) {
    this.getPosts();
  }

  getPosts() {
    console.log('llamamos a la funcion');
    this.blogService.getPosts().then(data => {
      this.posts = data;
    });
  }
}
