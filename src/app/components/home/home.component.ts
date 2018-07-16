import { Aboute ,Advamced ,Insurance} from './../../model/description';
import { Component, OnInit } from '@angular/core';   
import { TruflaService } from './../../services/trufla.service'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 })
export class HomeComponent implements OnInit {
  TitleHome:string = 'WE ARE THE FIRST!';
  aboutes:Aboute[];
  advamceds:Advamced[]; 
  insurance:Insurance[] = [
  { icon: 'assets/imgs/1.png' , title: 'COMERCIAL' },
  { icon: 'assets/imgs/2.png' , title: 'HOME' },
  { icon: 'assets/imgs/3.png' , title: 'AUTO' },
   ];
 
  
  constructor(public truflaService:TruflaService ) { }
 
 
   ngOnInit() {
    this.truflaService.getAbout().subscribe(aboutes => {this.aboutes = aboutes }); 
    this.truflaService.getAdvanced().subscribe(advamceds => {this.advamceds = advamceds }); 

   }
 
 }
 