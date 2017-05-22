import { Component, OnInit } from '@angular/core';
import { Logo, Link } from "./nav.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public logos: Array<Logo> = [
    new Logo('https://app.shopping-feed.com/images/registration/logo_sf_other.svg', 'logo_sf_other')
  ];

  public log: string= 'https://app.shopping-feed.com/images/registration/logo_sf_other.svg';

  public links: Array<Link> = [
    new Link('Accueil', ''),
    new Link('Présentation', 'presentation'),
    new Link('Compétences', 'competence'),
    new Link('Projets', 'projet'),
    new Link('Contact', 'formulaire')
  ];

// function link selected: change Background-color et color.

  selectedIndex: number;

  select(index: number) {
    this.selectedIndex = index;
  }

  constructor() { }

  ngOnInit() {
  }


}
