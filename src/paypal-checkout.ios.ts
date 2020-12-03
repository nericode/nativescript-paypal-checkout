import { Common } from './paypal-checkout.common';

declare const BTAPIClient: any, BTPayPalDriver: any, BTPayPalRequest: any;

export class PaypalCheckout extends Common {
    constructor(){
        super();
    }
    paypalRequest(options: PaypalOptions): Promise<any> {
        return new Promise(function (resolve, reject) {
            var context = this;

            var braintreeClient = BTAPIClient.alloc().initWithAuthorization(options.token);
            var payPalDriver = BTPayPalDriver.alloc().initWithAPIClient(braintreeClient);

            payPalDriver.viewControllerPresentingDelegate = context;
            payPalDriver.appSwitchDelegate = context; 
            var request= BTPayPalRequest.alloc().initWithAmount(options.amount);
            request.currencyCode = options.currencyCode; 

            payPalDriver.requestOneTimePaymentCompletion(request, function(tokenizedPayPalAccount, error) {
                if (tokenizedPayPalAccount) {
                    resolve(tokenizedPayPalAccount.nonce);
                } else if (error) {
                    reject(error);
                } else {
                    reject("Buyer canceled payment approval");
                }
            });
        });
    }
}

export interface PaypalOptions {
    token: string;
    amount: string;
    currencyCode: string;
}