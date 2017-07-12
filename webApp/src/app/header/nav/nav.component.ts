import {
  Component,
  OnInit,
  ElementRef,
  Input,
  keyframes,
  trigger,
  state,
  animate,
  transition,
  style
} from '@angular/core';

import { Logo, Link } from "./nav.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  host: {
    '(document:scroll)': 'onScroll($event)'
  },
  animations: [
    trigger('hoverPanel', [
      state('active', style({
        transform: 'scale(0.7)',
        backgroundColor: '#eee',
        //width: '1000px',
        color: '#000'
      })),
      state('inactive', style({
        transform: 'scale(0.9)',
        backgroundColor: '#098fdc',
        //width: '1500px',
        color: '#fff'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('focusPanel', [
      state('inactive', style({
         transform: 'scale(0)',
         backgroundColor: '#eee'
      })),
      state('active', style({
         transform: 'scale(1)',
         backgroundColor: '#cfd8dc'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('movePanel', [
      transition('void => *', [
        animate(600, keyframes([
          style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
          style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
      ])
    ])
  ]
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

  //console.log('Height presentation' + ' ' + document.documentElement.scrollHeight + 'px');




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
  // console.log(document.getElementsByTagName('nav'));
  // console.log(header + '  px');

    if(sro > header - 10 ) {
        //console.log(this.headerScroll);
        this.headerScroll = false;
    }
    else {
      //console.log(this.headerScroll);
      this.headerScroll = true;
    }
  }

  constructor() {}

  state: string = 'inactive';
  state1: string = 'inactive';
  toggleMove() {
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  hoverMove() {
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  mouseEnter(div : string){
    this.state1 = (this.state1 === 'inactive' ? 'active' : 'inactive');
    console.log("mouse enter : " + div);
   }

   mouseLeave(div : string){
     console.log('mouse leave :' + div);
   }
  ngOnInit() {
  }

}
