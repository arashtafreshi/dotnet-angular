import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  GetAllUsers(): Promise<any> {
    return this.httpClient.get('/api/GetAllUsers').toPromise();
  }

  GetAllArticles(): Promise<any> {
    return this.httpClient.get('/api/GetAllArticles').toPromise();
  }

  GetAttachement(id: string, name: string): Promise<any> {
    return this.httpClient.get('/api/attachments/' + id + '/' + name).toPromise();
  }

}
