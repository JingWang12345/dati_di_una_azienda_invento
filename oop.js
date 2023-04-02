const order1 = new Order('Penna',2.00,10);

console.log(order1.toString());


const client1= new Client('Pietro', 'Viglino', 'Via Balbi 22',[order1]);

console.log(client1.toString());

const employee1 =new Employee('Simone','Maccarone',[]);

employee1.addClient(client1);

console.log(employee1);