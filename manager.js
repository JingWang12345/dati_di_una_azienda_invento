class Manager extends Person{
    
    constructor(name, surname, dob, employees){
        super(name, surname, dob);
        this.employees = employees;
    }

    toString(){
        return super.toString() + '\n'
        + "EMPLOYEES:" + this.employees + '\n'
        +"CLIENT:" + this.totalClients() + '\n'
        +"TOTALEARNS" + this.totalEarns();
       
    }   
    
    totalClient(){

    }

}