import { Component, OnInit } from '@angular/core';
import { Carta } from './carta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
cartas: Carta[];
/*
constructor(private cartaService: CartaService){}

  ngOnInit(): void {
    this.cartaService.getCartas().subscribe((cartas)=>(this.cartas =cartas));
  }
*/
}
