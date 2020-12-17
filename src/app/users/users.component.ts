import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((data) => this.displayUsers(data));
  }

  displayUsers(data) {
    this.users = data;
  }
}