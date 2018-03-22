import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BlogService } from '../../services/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public posts: any;

  constructor(public navCtrl: NavController, public blogService: BlogService) {
    console.log('llamamos en el constructor');
    this.getPosts();
  }

  public getPosts() {
    console.log('llamamos a la funcion');
    this.blogService.getPostsService().then(data => {
      this.posts = data;
    });
  }
}
