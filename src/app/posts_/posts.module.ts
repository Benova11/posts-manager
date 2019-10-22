import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PostListComponent } from '../posts_/post-list/post-list.component';
import { PostCreateComponent } from '../posts_/post-create/post-create.component';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PostCreateComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class PostsModule {}
