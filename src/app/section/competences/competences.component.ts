import { Component, OnInit } from '@angular/core';
import { Competence } from "./competences.model";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})

export class CompetencesComponent implements OnInit {


  public title:string = 'Compétences';

  private path:string = 'assets/images/logos/';

  public competences: Array<Competence> = [
    new Competence(this.path + 'html-logo.png', 'HTML','html', 80),
    new Competence(this.path + 'css-logo.png', 'CSS', 'css', 80),
    new Competence(this.path + 'javascript-logo.png', 'JavaScript', 'javascript', 70),
    new Competence(this.path + 'angular-logo.png', 'Angular-CLI', 'angular', 70),
    new Competence(this.path + 'php-logo.png', 'PHP', 'php', 50),
    new Competence(this.path + 'sass-logo.png', 'SASS', 'sass', 75),
    new Competence(this.path + 'gulp-logo.png', 'GULP', 'gulp', 75),
    new Competence(this.path + 'photoshop-logo.png', 'Photoshop', 'photoshop', 60)
  ];

  constructor() { }

  ngOnInit() { }

}
