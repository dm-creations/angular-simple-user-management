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
  editing:Boolean = false;
  addUser:Boolean = true;
  numofUsers;

  newUser = {
    name: "",
    username: "",
    phone: "",
    id: this.numofUsers
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((data) => this.displayUsers(data))
  }

  ngOnChanges() {
    console.log('changed!')
  }

  numUsers() {
    Object.keys(this.users).length;
  }

  editUser() {
    this.editing ? this.editing = false : this.editing = true;
  }
  // submit(user) {
  //   const response = this.http.post("https://jsonplaceholder.typicode.com/users",{name: 'John',id: '2'}).subscribe((data) => this.displayUsers(data))
  //   console.log(response)
  // }
  submit(user) {
    this.newUser.id = Object.keys(this.users).length + 1;
    this.users.push(user);
    console.log(this.users);
    this.newUser = {
      name: "",
      username: "",
      phone: "",
      id: this.numofUsers
    }
  }

  displayUsers(data) {
    this.users = data;
  }
  delete(user){
    const url = `${this.usersUrl}/${user.id}`; // DELETE api/users/42
    this.http.delete(url);
    delete this.users[user.id -1];
      // .pipe(
      //   // What can I do to get the Response Object Ok: true to show up on console here?
      // );
  }

  /** DELETE: delete the user from the object */
  deleteUser(id: number) {
    delete this.users.id;
    // unsubscribe() {this.users}
    // this.input1 = this.users.id
  }
}