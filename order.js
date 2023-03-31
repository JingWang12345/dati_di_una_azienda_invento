class Order{
constructor(product, quantity, unitprice){
    this.product = product;
    this.quantity = quantity;
    this.unitprice = unitprice;
}
toString(){
    return "PRODUCT:" + this.product + '\n'
    +"QUANTITY:" + this.quantity + '\n'
    +"UNITPRICE:" + this.unitprice +'\n'
    +"TOTALPRICE" + this.totalPrice();

}
totalPrice(){
    let total = this.quantity*this.unitprice;
    return total;
}
}