import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { ContactComponent } from './components/contact/contact.component'; 
import { SeeMoreComponent } from './components/see-more/see-more.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { TruflaService } from './services/trufla.service';
import { FormsModule} from '@angular/forms';  

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'see', component: SeeMoreComponent },
  { path: 'contact', component: ContactComponent },
];
const firebaseConfig = {
  apiKey: "AIzaSyBZLUYNUKuwaQA0zOJAdvOXmdBw1LfX0B4",
    authDomain: "trufle-17709.firebaseapp.com",
    databaseURL: "https://trufle-17709.firebaseio.com",
    projectId: "trufle-17709",
    storageBucket: "trufle-17709.appspot.com",
    messagingSenderId: "1046202560233"
};
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent, 
    ContactComponent, 
    SeeMoreComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig), 
   ],
  providers: [
    AngularFireModule,
    AngularFireAuth ,
    AngularFireDatabase, 
    TruflaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }