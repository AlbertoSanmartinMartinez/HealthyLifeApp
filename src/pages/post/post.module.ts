import { NgModule } from '@angular/core';
import { PostPage } from './post';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PostPage
  ],
  imports: [
    IonicPageModule.forChild(PostPage),
    SharedModule
  ],
  exports: [
    PostPage
  ]
})

export class PostPageModule {}
