import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

import { FormService } from './service/form.service';
import { formulaire } from './formulaire.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
  providers: [FormService]
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


  get diagnostic() {
    return JSON.stringify(this.model);
  }


  http : Http;
  endpoint : string;

  constructor(private userservice: FormService, http : Http) {
    this.http = http;
  }
  onSubmit() {
    this.submitted = true;
      this.userservice.addNew(this.model);
  }
  sendEmail(){
    let postVars = {
      email : this.model.email,
      name : this.model.name,
      message : this.model.message
    };

    //You may also want to check the response. But again, let's keep it simple.
    this.http.post(this.endpoint, postVars)
      .subscribe(
          response => console.log(response),
          response => console.log(response)
      )
  }
  ngOnInit() {
    //This data could really come from some inputs on the interface - but let's keep it simple.
  //  this.email = "hpierce@example.com";
  //  this.name = "Hayden Pierce";
  //  this.message = "Hello, this is Hayden.";

   //Start php via the built in server: $ php -S localhost:8000
   this.endpoint = "./PHP/sendEmail.php";
  }

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
