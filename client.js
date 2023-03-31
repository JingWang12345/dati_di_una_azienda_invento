class Clients extends Person{
   
    constructor(name, surname, dob, address, orders){
        super(name, surname, dob);
        this.address = address;
        this.orders =orders;
    }

    toString(){
        return super.toString() + '\n'
        + "ADDRESS:" + this.address + '\n'
        + "ORDERS:" + this.orders;

    }   
    

}