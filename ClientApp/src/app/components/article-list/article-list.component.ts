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
  selectedDocument:any = null;
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

  hasImage(item:any){
    return item.value._attachments && Object.keys(item.value._attachments).length > 0;
  }

  getImages(item:any){
    let images:any[] = [];
    Object.keys(item.value._attachments).forEach(name => {
      images.push('/api/attachments/' + item.id + '/' + name)
    });
    //let url ='/api/attachments/' + item.id + '/' + Object.keys(item.value._attachments)[0]; 
    //debugger;
    return images;
  }

  GetImagesName(item:any){
    return Object.keys(item.value._attachments);
  }

  setSelectedDocument(item:any){
    this.selectedDocument = item;
  }

  GetFirstImage(item:any){
    let name = this.GetImagesName(item);
    let url = `/api/Attachments/`+item.id+`/`+(name.length>0?name[0]:"");
    return url;
  }

}
