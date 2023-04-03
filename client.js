class Client extends Person {

    constructor(name, surname, address, orders) {
        super(name, surname);
        this.address = address;
        this.orders = orders;
    }
    addOrder(newOrder) {
        this.orders.push(newOrder);
    }

    // totalOrderPrice() {
    //     let total = 0;
    //     for (let i = 0; i < this.orders.length; i++) {
    //         const order = this.orders[i];
    //         total += order.totalPrice();
    //     }
    //     return total;
    // }
    totalOrderPrice(){
       return this.orders.reduce((previous, current )=> {
            previous+=current.totalPrice();
            return previous;
        },0);
    }

    toString() {
        let description = super.toString()
            + 'ADDRESS: ' + this.address + '\n'
            + 'ORDER COUNT: ' + this.orders.length + '\n'
            + 'TOTAL ORDER PRICE: ' + this.totalOrderPrice().toFixed(2) + '€\n'
            + 'ORDERS LIST:\n';
            // `Lista ordine:\n----\n` +this.order.join('---------------'\n');

        for (let i = 0; i < this.orders.length; i++) {
            const order = this.orders[i];
            description += '-----------------\n'
            description += order.toString()

        }
        return description;
    }


}