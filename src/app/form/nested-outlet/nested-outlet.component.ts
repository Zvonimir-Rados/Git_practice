import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormService } from '../../shared/form.service';
import { UserModel } from '../../user.model';


@Component({
  selector: 'app-nested-outlet',
  templateUrl: './nested-outlet.component.html',
  styleUrl: './nested-outlet.component.css'
})
export class NestedOutletComponent implements OnInit, OnDestroy {

  users : UserModel[] = [];
  subscription : Subscription

  constructor(private formService : FormService) {}

 ngOnInit(): void {
  this.users = this.formService.getUsers();
    this.subscription = this.formService.inputsAdded
    .subscribe((users : UserModel[]) => {
      this.users = users;
 })
 }

 ngOnDestroy(): void {
   this.subscription.unsubscribe()
 }
  
 onAddUser(index : number) {
  this.formService.startedEditing.next(index);
 }

}
