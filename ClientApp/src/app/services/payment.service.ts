import { Injectable } from '@angular/core';
import { element } from 'protractor';

declare var Stripe: any;
declare var elements: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  stripe: any;
  elements: any;
  paymentRequest: any;


  constructor() {
    this.stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
    this.elements = this.stripe.elements();

    this.paymentRequest = this.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Demo total',
        amount: 1000,
      },
      requestShipping: true,
      shippingOptions: [
        // The first shipping option in this list appears as the default
        // option in the browser payment interface.
        {
          id: 'free-shipping',
          label: 'Free shipping',
          detail: 'Arrives in 5 to 7 days',
          amount: 0,
        },
      ],
      requestPayerName: true,
      requestPayerEmail: true,
    });
  }


  


}
