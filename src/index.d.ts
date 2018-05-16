import { Common } from './paypal-checkout.common';

export declare class PaypalCheckout extends Common {
    // define your typings manually
    // or..
    // take the ios or android .d.ts files and copy/paste them here
    paypalRequest(options: PaypalOptions): Promise<any>;
}

export interface PaypalOptions {
    token: string;
    amount: string;
    currencyCode: string;
}
