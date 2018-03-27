import { NgModule } from '@angular/core';
import { CommentPage } from './home';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CommentPage
  ],
  imports: [
    IonicPageModule.forChild(CommentPage),
    SharedModule
  ],
  exports: [
    CommentPage
  ]
})

export class CommentPageModule {}
