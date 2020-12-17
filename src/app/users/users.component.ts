import { Component, OnInit,OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnChanges {

  usersUrl;
  users;
  input1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((data) => this.displayUsers(data))
  }

  ngOnChanges() {
    console.log('changed!')
  }

  displayUsers(data) {
    this.users = data;
  }
  delete(user){
    const url = `${this.usersUrl}/${user.id}`; // DELETE api/users/42
    return this.http.delete(url)
      .pipe(
        // What can I do to get the Response Object Ok: true to show up on console here?
      );
  }

  /** DELETE: delete the user from the object */
  deleteUser(id: number) {
    delete this.users.id;
    // unsubscribe() {this.users}
    // this.input1 = this.users.id
  }
}