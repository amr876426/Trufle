import { Injectable } from '@angular/core';
import { AngularFireDatabase , FirebaseListObservable ,FirebaseObjectObservable} from 'angularfire2/database';
import { Aboute ,Advamced } from './../model/description';

@Injectable()
export class TruflaService {
  aboutes: FirebaseListObservable<any[]>;
  aboute: FirebaseObjectObservable<any>;
  advamceds: FirebaseListObservable<any[]>;
  advamced: FirebaseObjectObservable<any>;
  constructor(public af:AngularFireDatabase) {
    this.aboutes = this.af.list('aboute') as FirebaseListObservable<Aboute[]>;
    this.advamceds = this.af.list('advamced') as FirebaseListObservable<Advamced[]>;

}
getAbout(){
  return this.aboutes;
}
getAdvanced(){
  return this.advamceds;
}

}
