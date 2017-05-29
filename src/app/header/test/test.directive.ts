import {
  Directive,
  ElementRef,
  Host,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appTest]',
  //inputs: ['bgColor', 'colour:color'],
  host: {
    '(document:scroll)': 'onScroll($event)'
  }
})

export class TestDirective {


// onScroll() {
// //In chrome and some browser scroll is given to body tag
// let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
// let max = document.documentElement.scrollHeight;
//
// console.log('SCROLL '+ ' ' + document.body.scrollTop);
// console.log('SCROLL 1' + ' ' + document.documentElement.offsetHeight);
// console.log('SCROLL 2' + ' ' +  document.documentElement.scrollHeight);
// // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
// // console.log(max);
// // console.log(pos);
// //   if(pos == max )   {
// //   //Do your action here
// //     console.log('stop');
// //   }
// //   if(pos > 510 )   {
// //   //Do your action here
// //     console.log('start');
// //  }
// }



  constructor() {}

}
