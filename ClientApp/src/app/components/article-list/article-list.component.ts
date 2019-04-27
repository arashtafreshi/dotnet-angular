import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ApiService]
})
export class ArticleListComponent implements OnInit {
  articles: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.GetAllArticles().then(
      data => {
        this.articles = data.rows;
        console.log('articles', this.articles);
      },
      err => {

      }
    );
  }

  GetImage(item: any) {
    if (item.value._attachments && Object.keys(item.value._attachments).length > 0) {
      this.api.GetAttachement(item.id, Object.keys(item.value._attachments)[0]).then(
        data => {
          console.log(data);
          return data;
        },
        err => {
          console.error(err);
        }
      )
    }

  }

}
