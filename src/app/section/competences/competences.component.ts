import { Component, OnInit } from '@angular/core';
import { Competence } from "./competences.model";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
  host: {
    '(document:scroll)': 'persScroll($event)'
  },
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
    new Competence(this.path + 'gulp-logo.png', 'GULP', 'gulp', 75, 'col-lg-offset-2'),
    new Competence(this.path + 'photoshop-logo.png', 'Photoshop', 'photoshop', 60)
  ];



  persScroll($event) {
    let $hauteurScroll = document.body.scrollTop;
    let $Html = document.getElementById('html');
    let hauteurHtml:number = $Html.offsetTop;
    let h:any = $Html.offsetParent;
    var rect = h.getClientRects();

    let i:number;
    let tabComp = this.competences[0].lang;
    for (i = 0; i < this.competences.length; i++) {
      // Ceci sera exécuté 5 fois
      // la variable "pas" ira de 0 à 4
      //console.log(this.competences[i].lang);

      let $hmlt = document.getElementById(this.competences[i].lang);
      let foo = $hmlt.getClientRects();
      if(foo[length].top) {
        this.competences[i].lang
      }
    }
    if(rect[length].top <= 0) {
      this.test();
    }
  }

  test() {
    return console.log('allo');
  }

  constructor() { }

  ngOnInit() { }

}
