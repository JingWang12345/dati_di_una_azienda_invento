const order1 = new Order('Penna',2.00,10);
const order2 = new Order('Matita',0.5,100);
const client1= new Client('Pietro', 'Viglino', 'Via Balbi 22',[order1,order2]);


// console.log(client1.toString());
const order3 = new Order('Pinzatrici', 10, 10);
client1.addOrder(order3);
console.log(client1.toString());

console.log(client1.totalOrderPrice());

const employee1 =new Employees('Simone','Maccarone',[client1]);

// console.log(employee1.toString());

console.log(Math.sqrt(16));

const numbers = [3, 4, 5, 9]; 

function isEven(element) {
    return element % 2 ===0;
}

function multiplyBy3(element) {
    return element * 3;
    
}
console.log(Utility.filter(numbers, (element) => element > 4));
console.log(Utility.map(numbers, multiplyBy3));