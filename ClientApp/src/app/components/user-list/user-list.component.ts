import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ApiService]
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.GetAllUsers().then(
      data => {
        this.users = data.rows;
        console.log(this.users);
      },
      err => {

      }
    );
  }

}
