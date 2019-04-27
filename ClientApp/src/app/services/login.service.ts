import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const _username = "admin";
const _password = "1CouchdbeBkhod";
const _dbUrl = "http://104.192.4.168:5984";
const _dbName = "testdotnet";

const _headerOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': 'Basic ' + btoa(_username + ':' + _password)
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login() {
    let data = {
      "name": _username,
      "password": _password
    };

    this.httpClient.post(_dbUrl + "/_session", data, _headerOptions).toPromise().then(
      data => {
        console.log("data: ", data);
      },
      err => {
        console.error(err);
      }
    );
  }

  GetAllDocs(): Promise<any> {
    return this.httpClient.get(_dbUrl + '/api/db/doc', _headerOptions).toPromise();
  }

  GetAllUsers(): Promise<any> {
    return this.httpClient.get( '/api/GetAllUsers').toPromise();
  }



  // end of class
}
