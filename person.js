class Person {
    constructor(name, surname, dob) {
        this.name = name;
        this.surname = surname;
        this.dob = dob;
    }

    toString() {
        return 'NAME: '+ this.name +' '+ this.surname + '\n'
            // + "AGE:" + this.getAge() + '\n'
            // + this.isBirthday();

    }
// getAge(){
//     function getAge(dateString) {
//         var today = new Date();
//         var birthDate = new Date(dateString);
//         var age = today.getFullYear() - birthDate.getFullYear();
//         var m = today.getMonth() - birthDate.getMonth();
//         if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//             age--;
//         }
//         return age;
//     }
    
// }
// isBirthday(){

// }
}