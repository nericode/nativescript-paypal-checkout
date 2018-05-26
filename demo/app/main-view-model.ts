import { Observable } from 'tns-core-modules/data/observable';
import { PaypalCheckout, PaypalOptions } from 'nativescript-paypal-checkout';

export class HelloWorldModel extends Observable {
    token = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIyZjQ5NzY2YmFjMDIyYjkwNzUyODY2M2NkYmViYTFkODU1NGFmZDczNmUxMTEzNGVlY2Q1YjQzYjc4ZDAwNjdifGNyZWF0ZWRfYXQ9MjAxOC0wNS0xN1QxODozMTozMi45ODY1OTM3ODIrMDAwMFx1MDAyNm1lcmNoYW50X2lkPWN2a2Y5bnZtM2o1M20zemdcdTAwMjZwdWJsaWNfa2V5PTkybjRueG5nNjdiOXk5eHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvY3ZrZjludm0zajUzbTN6Zy9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL2N2a2Y5bnZtM2o1M20zemcvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tL2N2a2Y5bnZtM2o1M20zemcifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiV2Fpc29mdCIsImNsaWVudElkIjoiQVdvemZSZHR0UGk5U3h3UDlCbXd4bVZON1loZmgwUjREcHZwOVZ1c2pzVG4tbjlPRk1mU0JzRm5SMlJUVWhGenBHTHVyaWc3ZklDWl81NkQiLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjpmYWxzZSwiZW52aXJvbm1lbnQiOiJvZmZsaW5lIiwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwibWVyY2hhbnRBY2NvdW50SWQiOiJ3YWlzb2Z0IiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn0sIm1lcmNoYW50SWQiOiJjdmtmOW52bTNqNTNtM3pnIiwidmVubW8iOiJvZmYifQ==";
    
    constructor() {
        super();
    }

    pay() {

        var paypalCheckout = new PaypalCheckout();

        let options: PaypalOptions = {
            token: this.token,
            amount: "10",
            currencyCode: "USD"
        };

        paypalCheckout.paypalRequest(options).then(
            (nonce) => {
                console.log("Nonce: " + nonce);
            }, (error) => {
                console.log(error);
            }
        );
    }
}
