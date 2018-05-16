import { Common } from './paypal.common';
import * as app from "tns-core-modules/application";

declare const com: any;

export class Paypal extends Common {

    paypalRequest(options: PaypalOptions): Promise<any> {
        return new Promise(function (resolve, reject) {
            let braintree = null;

            try {
                let activity = app.android.startActivity || app.android.foregroundActivity;
                braintree = com.braintreepayments.api.BraintreeFragment.newInstance(activity, options.token);
            } catch(error) {
               reject("Braintree created error: " + error);
            }

            let request = new com.braintreepayments.api.models.PayPalRequest(options.amount).currencyCode(options.currencyCode);
            com.braintreepayments.api.PayPal.requestOneTimePayment(braintree, request);

            braintree.addListener(new com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener({
                    onPaymentMethodNonceCreated: function(paymentMethodNonce) {
                        resolve(paymentMethodNonce.getNonce());
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
