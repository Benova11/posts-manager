import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatToolbarModule,
        MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts_/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts_/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
