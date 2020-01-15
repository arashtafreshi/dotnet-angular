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
import { CartMainComponent } from './components/cart-main/cart-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ArticleListComponent,
    UserListComponent,
    ArticleEditComponent,
    ProductThumbnailComponent,
    CartMainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'users', component: UserListComponent },
      { path: 'article', children:[
        { path: 'edit/:id', component: ArticleEditComponent },
        { path: '', component: ArticleListComponent }
      ]},
      { path: 'cart', component: CartMainComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
