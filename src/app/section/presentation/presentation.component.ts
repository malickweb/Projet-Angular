import {
    Component, Input, keyframes,
    trigger, state, animate, transition, style
} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
  // animations: [
  //   trigger('hoverPanel', [
  //          state('active', style({
  //             transform: 'scale(0.7)',
  //             backgroundColor: '#eee',
  //             //width: '1000px',
  //             color: '#000'
  //          })),
  //          state('inactive', style({
  //             transform: 'scale(0.9)',
  //             backgroundColor: '#098fdc',
  //             //width: '1500px',
  //             color: '#fff'
  //          })),
  //          transition('inactive => active', animate('500ms ease-in')),
  //          transition('active => inactive', animate('500ms ease-out'))
  //      ]),
  //   trigger('focusPanel', [
  //          state('inactive', style({
  //              transform: 'scale(0)',
  //              backgroundColor: '#eee'
  //          })),
  //          state('active', style({
  //              transform: 'scale(1)',
  //              backgroundColor: '#cfd8dc'
  //          })),
  //          transition('inactive => active', animate('100ms ease-in')),
  //          transition('active => inactive', animate('100ms ease-out'))
  //      ]),
  //
  //      trigger('movePanel', [
  //          transition('void => *', [
  //              animate(600, keyframes([
  //                  style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
  //                  style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
  //                  style({opacity: 1, transform: 'translateY(0)', offset: 1}),
  //              ]))
  //          ])
  //
  //      ])
  //
  //  ]
})
export class PresentationComponent {

  public title: string = 'Présentation';

  public log: string = 'https://app.shopping-feed.com/images/registration/logo_sf_other.svg';
//
//   onResize(event) {
//   event.target.innerWidth;
//   event.target.innerHeight;
//   console.log(event.target.innerWidth);
//   console.log(event.target.innerHeight);
// }
  constructor() { }
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
}
