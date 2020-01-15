import { ApiService } from "../services/api.service";

 export interface IProduct {
    _id:string;
    _rev:string;
    type:string;
    title:string;
    header:string;
    tags:string[];
    dateCreated:Date;
    createdBy:string;
    active:boolean;
    content:string;
    lastModifiedBy:string;
    DateLastModified:Date;
    sharedWidth:string[];
    permission:string;
    author:string;
    datePublished:Date;
    body:string;
    date:Date;
    profilePicture:string;
    showProfilePicture:boolean;
    _attachments: Record<string,Attachment>;
    price:number;
}


export class Product implements IProduct{
     _id: string;
     _rev: string;
     type: string;
     title: string;
     header: string;
     tags: string[];
     dateCreated: Date;
     createdBy: string;
     active: boolean;
     content: string;
     lastModifiedBy: string;
     DateLastModified: Date;
     sharedWidth: string[];
     permission: string;
     author: string;
     datePublished: Date;
     body: string;
     date: Date;
     profilePicture: string;
     showProfilePicture: boolean;
     _attachments: Record<string, Attachment>;
     price: number;
     get imagesName(){
        return Object.keys(this._attachments);
     };// = getImagesName;
     get primaryImage(){
         return Object.keys(this._attachments).length>0 ? Object.keys(this._attachments)[0] : null;
     }

     
     constructor(private apiService:ApiService){

     }

     public save(){
        this.apiService.SaveDocument(this._id, this).then(
            data=>{
              console.log(data);
            },
            err=>{
              console.error(err);
            }
          );
     }
}

export interface Attachment{
    content_type:string;
    revpos:number;
    digest:string;
    length:number;
    stub:boolean;
}
