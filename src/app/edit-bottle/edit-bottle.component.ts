import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-bottle',
  templateUrl: './edit-bottle.component.html',
  styleUrls: ['./edit-bottle.component.css']
})
export class EditBottleComponent implements OnInit {
  id;
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
  comment?: string;
  rating?: number;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBottleDetails(this.id).subscribe(bottle => {
      this.name = bottle.name;
      this.country = bottle.country;
      this.district = bottle.district;
      this.quantity = bottle.quantity;
      this.price = bottle.price;
      this.year = bottle.year;
      this.grape = bottle.grape;
      this.taste = bottle.taste;
      this.scent = bottle.scent;
      this.food = bottle.food;
      this.ageing = bottle.ageing;
      this.comment = bottle.comment;
      this.rating = bottle.rating;
    });
  }

  onEditSubmit() {
    let bottle = {
      name: this.name, 
      price: this.price || '',
      quantity: this.quantity || 0,
      year: this.year || '',
      grape: this.grape || '',
      country: this.country || '',
      district: this.district || '',
      taste: this.taste || '',
      scent: this.scent || '',
      food: this.food || '',
      ageing: this.ageing || '',
      comment: this.comment || '',
      rating: this.rating || '',
      modified_at: new Date().toString()
    };
    
    this.firebaseService.updateBottle(this.id, bottle);
    this.router.navigate(['/bottles']);
  }

}
