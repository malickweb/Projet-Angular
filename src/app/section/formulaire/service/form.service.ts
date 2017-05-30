import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class FormService {

  constructor(private http: Http) {}

addNew(usercreds) {
  var headers = new Headers();
  var name = 'name =' + usercreds.name;
  var emailid = 'email  =' + usercreds.email;
  var message = 'message =' + usercreds.message;
  let formulaire = {
    name: usercreds.name,
    email: usercreds.email,
    message: usercreds.message
  };
  console.log(formulaire);
  console.log(name + ' ' + emailid + ' ' + message);
  // headers.append('Content-Type', 'application/X-www-form-urlencoded');

  // this.http.post('http://localhost:4200/#formulaire', name, {headers: headers}).subscribe((data) => {
  //   if(data.json().success) {
  //       this.http.post('http://google.fr', emailid, {headers: headers}).subscribe((data) => {
  //         if(data.json().success) {
  //           console.log('Sent successfully');
  //         }
  //       })
  //     }
  //   })
  }
}
