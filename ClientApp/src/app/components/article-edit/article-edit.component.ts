import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  document:Product = null;
  selectedOptionImage = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService:ApiService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.selectedOptionImage = 
      this.apiService.GetDocument(id).then(
        data=>{
          console.log(data);
          //this.document = data;
          this.document = Object.assign(new Product(this.apiService), data);
          this.selectedOptionImage = this.document.primaryImage;
        },
        err=>{
          console.error(err);
        }
      );
  }


  handleFileInput(files){
    console.log(files);
    // for(let i=0; i<files.length; i++){
    //   let f = files[i];
    //   this.apiService.
    // }
  }

  setAsDefaultImage(src:string){

  }

  update(){
    this.document.save();
    // this.apiService.SaveDocument(this.document["_id"], this.document).then(
    //   data=>{
    //     console.log(data);
    //   },
    //   err=>{
    //     console.error(err);
    //   }
    // );
  }
}
