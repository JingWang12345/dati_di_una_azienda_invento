class Employees extends Person{
  constructor(name, surname, dob, clients){
        super(name, surname, dob);
        this.clients = clients;
    }

    toString(){
        return super.toString() + '\n'
        + "CLIENTS:" + this.clients;

    }   
    

}