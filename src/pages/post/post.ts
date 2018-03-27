import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { BlogService } from '../../providers/blog_service';
import { AuthenticationService } from '../../providers/authenticate_service';
import { CommentPage } from '../comment/comment'

@IonicPage({
  name: 'post'
})
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})

export class PostPage {

  public post: any;
  public comments: any = null;
  public user: any = null;
  public images: any = null;

  constructor(
    public navCtrl: NavController,
    public blogService: BlogService,
    public navParams: NavParams,
    public authenticateService: AuthenticationService) {
      var post_id = navParams.get('post_id');
      this.getPost(post_id);
      this.getComments(post_id);
  }

  //metodo para obtener el la informacion de un post
  getPost(post_id:string) {
    this.blogService.getPost(post_id).then(data => {
      this.post = data;
    });
  }

  //metodo para obtener los comentarios de un post
  getComments(post_id:string) {
    this.blogService.getComments(post_id).then(data => {
      this.comments = data;
    });
  }

  //metodo para obtener el autor de un post
  getUser() {

  }

  goToComment(post_id:string) {
    this.navCtrl.push(CommentPage, {
      post_id: post_id,
    });
  }
}
