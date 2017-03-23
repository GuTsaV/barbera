import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';

@Component({
  selector: 'app-bottles',
  templateUrl: './bottles.component.html',
  styleUrls: ['./bottles.component.css']
})
export class BottlesComponent implements OnInit {
  bottles: any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getBottles().subscribe(bottles => {
      this.bottles = bottles;
    });
  }

  drinkOne(id, quantity) {
    this.firebaseService.drinkOne(id, quantity);
  }
}

