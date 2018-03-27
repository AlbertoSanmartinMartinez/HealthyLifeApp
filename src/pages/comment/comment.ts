import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BlogService } from '../../providers/blog_service';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'comment'
})
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})

export class CommentPage {

  public user: any = null:
  public comment: FormGroup;

  constructor(
    public blogService: BlogService,
    public formBuilder: FormBuilder,
    public navParams: NavParams) {
      this.user =
      this.comment = formBuilder.group({
        title: ['', Validators.required],
        content: ['', Validators.required],
      });
  }

  doComment() {
    this.blogService.doComment().then(data => {
      this.comment = data;
    });
  }

  editComment() {

  }
}
