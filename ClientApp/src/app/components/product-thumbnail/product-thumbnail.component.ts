import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product:any;
  @Input() image:any;
  quantity:number = 0;

  constructor(
    private router: Router,
    private cartService:CartService) { }

  ngOnInit() {
    this.quantity = this.getProductQuantity();
  }

  decreaseQuantity(){
    if(this.quantity>0)this.quantity -= 1;
    debugger;
    this.cartService.removeFromCart(this.product);
  }

  increaseQuantity(){
    if(this.quantity<99)this.quantity += 1;
    this.cartService.addToCart(this.product);
  }


  getProductQuantity(){
    return this.cartService.getItems().filter(p=>p.id === this.product.id).length;
  }

  goToEdit(){
    this.router.navigate(['/article/edit/' + this.product.id]);
  }

}
