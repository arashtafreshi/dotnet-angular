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
      requestPayerName: true,
      requestPayerEmail: true,
    });
  }


  


}
