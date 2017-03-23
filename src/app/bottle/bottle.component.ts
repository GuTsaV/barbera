import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.css']
})

export class BottleComponent implements OnInit {
  id: any;
  bottle: any;


  constructor(
    private firebaseService: FirebaseService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBottleDetails(this.id).subscribe(bottle => {
      this.bottle = bottle;
    });
  }

  onDeleteClick() {
    this.firebaseService.deleteBottle(this.id);
    this.router.navigate(['/bottles']);
  }

  drinkOne(id, quantity) {
    this.firebaseService.drinkOne(id, quantity);
  }

}
