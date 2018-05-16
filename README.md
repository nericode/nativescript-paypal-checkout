# PayPal Checkout ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

## Screenshot
<img alt="iOS" src="https://res.cloudinary.com/dem02bcqj/image/upload/v1526497294/Screenshot_2018-05-16-13-58-00.png" width="250">

## Installation

```javascript
tns plugin add nativescript-paypal
```

## Usage

In the demo you will find a test token to test quickly

```javascript
import { Paypal, PaypalOptions } from 'nativescript-paypal';

private paypalCheckout: Paypal;

this.paypalCheckout = new Paypal();

let options: PaypalOptions = {
		token: "TOKEN", // The token is obtained from the server
		amount: "10",
		currencyCode: "USD"
};

this.paypalCheckout.paypalRequest(options).then(
		(nonce) => {
				console.log("Token nonce: " + nonce);
		}, (error) => {
				console.log(error);
		}
);

```

## Others

More references: https://developers.braintreepayments.com/guides/paypal/checkout-with-paypal/android/v2

Server-Side Implementation: https://developers.braintreepayments.com/guides/paypal/server-side/php

## License

Apache License Version 2.0, January 2004
