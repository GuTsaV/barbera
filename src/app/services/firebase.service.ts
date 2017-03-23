import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  bottles: FirebaseListObservable<any[]>;
  bottle: FirebaseObjectObservable<any>;
  auth: any;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(auth => {
      this.auth = auth;
      this.bottles = this.af.database.list('/bottles/' + this.auth.uid + '/') as FirebaseListObservable<Bottle[]>;
    });
  }

  getUserDisplayName() {
    if (this.auth) {
      return this.auth.auth['displayName'];
    }
    return '';
  }

  getBottles() {
    return this.bottles;
  }

  getBottleDetails(id) {
    this.bottle = this.af.database.object('/bottles/' + this.auth.uid + '/' + id) as FirebaseObjectObservable<Bottle>;
    return this.bottle;
  }

  addBottle(bottle) {
    return this.bottles.push(bottle);
  }

  updateBottle(id, bottle) {
    return this.bottles.update(id, bottle);
  }

  deleteBottle(id){
    return this.bottles.remove(id);
  }

  drinkOne(id, quantity){
    this.bottle = this.af.database.object('/bottles/'+ this.auth.uid + '/' + id) as FirebaseObjectObservable<Bottle>;
    if(quantity > 0) {
      return this.bottle.update({ quantity: quantity - 1 });
    }
  }
}

interface Bottle {
  $key?: string;
  name: string;
  price?: number;
  quantity?: number;
  year?: number;
  grape?: string;
  country?: string;
  district?: string;
  taste?: string;
  scent?: string;
  food?: string;
  ageing?: string;
  rating?: number;
  comment?: string;
  modified_at?: any;
  created_at?: any;
}
