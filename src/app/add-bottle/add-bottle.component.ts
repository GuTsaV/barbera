import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bottle',
  templateUrl: './add-bottle.component.html',
  styleUrls: ['./add-bottle.component.css']
})
export class AddBottleComponent implements OnInit {
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
  ageing?: number;
  comment?: string;
  rating?: number;

  currentYear: number;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    ) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
  }

  onAddSubmit(){
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
      created_at: new Date().toString()
    };

    this.firebaseService.addBottle(bottle);
    this.router.navigate(['/bottles']);
  }

}
