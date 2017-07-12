import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

import { formulaire } from './formulaire.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit  {

  public title: string = 'Contact';

  submitted = false;
  contact = false;

  model = new formulaire("", "", "");

  form(){
    console.log(this.model);
    console.log(this.model.name);
    console.log(this.model.email);
    console.log(this.model.message);
    this.contact = true;

    return this.model;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }


  constructor() {}

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {}
}
