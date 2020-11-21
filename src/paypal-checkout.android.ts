import { Common } from './paypal-checkout.common';
import * as app from "tns-core-modules/application";

declare const com: any;

export class PaypalCheckout extends Common {
    constructor(){
        super();
    }
    paypalRequest(options: PaypalOptions): Promise<any> {
        return new Promise(function (resolve, reject) {
            let braintree = null;

            try {
                let activity = app.android.startActivity || app.android.foregroundActivity;
                braintree = com.braintreepayments.api.BraintreeFragment.newInstance(activity, options.token);
            } catch(error) {
               reject("Braintree created error: " + error);
            }

            let request = new com.braintreepayments.api.models.PayPalRequest(options.amount)
                            .currencyCode(options.currencyCode)
                            .intent(com.braintreepayments.api.models.PayPalRequest.INTENT_AUTHORIZE);
                            
            com.braintreepayments.api.PayPal.requestOneTimePayment(braintree, request);

            braintree.addListener(new com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener({
                    onPaymentMethodNonceCreated: function(paymentMethodNonce) {
                        resolve(paymentMethodNonce.getNonce());
                    }
                })
            );

            braintree.addListener(new com.braintreepayments.api.interfaces.BraintreeCancelListener({
                    onCancel: function (requestCode) {
                        reject("Buyer canceled payment approval");
                    }
                })
            );

            braintree.addListener(new com.braintreepayments.api.interfaces.BraintreeErrorListener({
                    onError: function(error) {
                        reject(error);
                    }
                })
            );
        });
    }
}

export interface PaypalOptions {
    token: string;
    amount: string;
    currencyCode: string;
}
