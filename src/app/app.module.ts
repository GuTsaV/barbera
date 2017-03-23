import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { BottleComponent } from './bottle/bottle.component';
import { BottlesComponent } from './bottles/bottles.component';
import { AddBottleComponent } from './add-bottle/add-bottle.component';
import { EditBottleComponent } from './edit-bottle/edit-bottle.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bottles', component: BottlesComponent},
  {path: 'bottle/:id', component:BottleComponent},
  {path: 'add-bottle', component: AddBottleComponent},
  {path: 'edit-bottle/:id', component: EditBottleComponent}
]

export const firebaseConfig = {
  apiKey: 'AIzaSyBgQjDPsWBKL0fXKD-bleNPAmlRLwhlhKA',
  authDomain: 'barbera-52a5e.firebaseapp.com',
  databaseURL: 'https://barbera-52a5e.firebaseio.com',
  storageBucket: 'barbera-52a5e.appspot.com',
  messagingSenderId: '716979581258'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    BottleComponent,
    BottlesComponent,
    AddBottleComponent,
    EditBottleComponent,
    HomeComponent,
    NavbarComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
