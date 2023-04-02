class Order {
    constructor(product, unitPrice, quantity) {
        this.product = product;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }

    totalPrice() {
        return this.unitPrice * this.quantity;
    }

    toString() {
        return "PRODUCT: " + this.product + '\n'
            + "UNIT PRICE: " + this.unitPrice + '€\n'
            + "QUANTITY: " + this.quantity + '\n'
            + "TOTALPRICE: " + this.totalPrice() + '€\n'

    }

}


