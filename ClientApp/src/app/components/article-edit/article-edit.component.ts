import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  @Input() document:any = null;

  constructor() { }

  ngOnInit() {
  }

}
