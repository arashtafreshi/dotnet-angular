import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ArticleListComponent,
    UserListComponent,
    ArticleEditComponent,
    ProductThumbnailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'users', component: UserListComponent },
      { path: 'article', component: ArticleListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
