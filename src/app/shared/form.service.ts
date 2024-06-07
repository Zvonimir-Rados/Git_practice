import { Injectable } from "@angular/core";
import { UserModel } from "../user.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
}) 
export class FormService{

  users : UserModel[] = [];
  inputsAdded = new Subject<UserModel[]>();
  startedEditing = new Subject<number>()


  addInput(input : UserModel) {
    this.users.push(input);
    this.inputsAdded.next(this.users.slice());
  }

  getUser(index) {
    return this.users[index];
  }

  getUsers() {
    return this.users.slice();
  }
} 