import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  itemsInCart:any = [];

  constructor(private cartService:CartService){
    this.itemsInCart = cartService.items;
  }

}
