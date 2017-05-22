import { Component, OnInit } from '@angular/core';

import { formulaire } from './formulaire.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit  {

  public title: string = 'Formulaires';

  model= new formulaire("", "", "");

  form(){
    console.log(this.model);
    console.log(this.model.name);
    console.log(this.model.email);
    console.log(this.model.message);
  }
  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  constructor() {}

  ngOnInit() {}

  currentRate = 6;


 // 1
  // public loginForm = this.fb.group({
  //    email: ["", Validators.required],
  //    password: ["", Validators.required]
  // });
  // constructor(public fb: FormBuilder) {}
  // doLogin(event) {
  //  console.log(event);
  //  console.log(this.loginForm.value);
  // }

}
