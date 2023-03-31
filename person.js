class Person {
    constructor(name, surname, dob) {
        this.name = name;
        this.surname = surname;
        this.dob = dob;
    }

    toString() {
        return "NAME: " + this.name + '\n'
            + "SURNAME:" + this.surname + '\n'
            + "AGE:" + this.getAge() + '\n'
            + this.isBirthday();

    }
getAge(){
    
}
isBirthday(){

}
}