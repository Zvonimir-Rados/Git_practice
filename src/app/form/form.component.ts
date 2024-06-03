import { Component, ElementRef, OnDestroy, OnInit, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../shared/form.service';
import { UserModel } from '../user.model';
import { Subscription } from 'rxjs';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: true}) form: NgForm;

  subscription : Subscription
  editMode = false;
  editedUser : UserModel;
  editedIndex : number;
 
  constructor(private formService : FormService){}

  onSubmit(form: NgForm) {
    const value = form.value
    console.log();
    this.formService.addInput(new UserModel(value.name, value.email))
    form.resetForm();
  }
  
  ngOnInit(): void {
  this.subscription = this.formService.startedEditing
    .subscribe(
      (index : number) => {
        this.editMode = true;
        this.editedUser = this.formService.getUser(index);
        this.editedIndex = index;
        this.form.setValue({
        name: this.editedUser.name,
        email: this.editedUser.email
        })
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
