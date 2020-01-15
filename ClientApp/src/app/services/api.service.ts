import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  GetAllUsers(): Promise<any> {
    return this.httpClient.get('/api/GetAllUsers').toPromise();
  }

  GetDocument(id:string): Promise<any> {
    return this.httpClient.get('/api/doc/'+id).toPromise();
  }

  GetAllArticles(): Promise<any> {
    return this.httpClient.get('/api/GetAllArticles').toPromise();
  }

  GetAttachement(id: string, name: string): Promise<any> {
    return this.httpClient.get('/api/attachments/' + id + '/' + name).toPromise();
  }

  SaveDocument(id: string, data: any): Promise<any> {
    let myheaders = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    console.log(data);
    return this.httpClient.put('/api/doc/' + id, JSON.stringify(data), {headers: myheaders}).toPromise();
  }

  UploadFile(id: string, data: any): Promise<any> {
    let myheaders = new HttpHeaders({
      'Content-Type':  data.type,
      'Content-Disposition': 'attachment='+data.name
    });
    console.log(data);
    return this.httpClient.put('/api/doc/' + id, JSON.stringify(data), {headers: myheaders}).toPromise();
  }

}
