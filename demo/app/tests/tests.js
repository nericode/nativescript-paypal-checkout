var Paypal = require("nativescript-paypal").Paypal;
var paypal = new Paypal();

describe("greet function", function() {
    it("exists", function() {
        expect(paypal.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(paypal.greet()).toEqual("Hello, NS");
    });
});