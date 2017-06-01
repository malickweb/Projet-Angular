import { Component, OnInit, ElementRef } from '@angular/core';
import { Logo, Link } from "./nav.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  host: {
    '(document:scroll)': 'onScroll($event)'
  }
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

  headerScroll:boolean =  true;

// function link selected: change Background-color et color.
  selectedIndex: number;

  select(index: number, e) {
    this.selectedIndex = index;
  }

  onScroll(event) {
  //In chrome and some browser scroll is given to body tag
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight;

  // console.log('SCROLL'+ ' ' + document.body.scrollTop);
  // console.log('Height presentation' + ' ' + document.documentElement.offsetHeight);
  // console.log('height total' + ' ' +  document.documentElement.scrollHeight);

  console.log('Height presentation' + ' ' + document.documentElement.scrollHeight + 'px');




  //   if(pos == max )   {
  //   //Do your action here
  //     console.log('stop');
  //   }
  //   if(pos > 510 )   {
  //   //Do your action here
  //     console.log('start');
  //  }
  let sro = document.body.scrollTop;
  let header = document.getElementById("header").offsetHeight;
  console.log(document.getElementsByTagName('nav'));
  console.log(header + '  px');

    if(sro > header ) {
        console.log(this.headerScroll);
        this.headerScroll = false;
    }
    else {
      console.log(this.headerScroll);
      this.headerScroll = true;
    }
  }

  constructor() {}

  ngOnInit() {
  }

}
