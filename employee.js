class Employees extends Person{
  constructor(name, surname,  clients){
        super(name, surname);
        this.clients = clients;
    }

    addClient(newClient){
        this.clients.push(newClient);
    }

    removeClient(exClient){
        let client = this.clients;
        for (let i = 0; i < client.length; i++) {
           if(exClient === clients[i]){
            this.clients.splice(i,1);
           };
            
        }
    }

    totalEarnings(){
        let clients = this.clients;
        let sum = 0;
        for (let i = 0; i < clients.length; i++) {
            sum+= clients[i].totalOrderPrice();
        }
        return sum;
    
    }

    bestClient(){
        const clients = this.clients;
        let best = clients[0];
        for (let i = 1; i < clients.length; i++) {
            if (best.totalOrderPrice() < clients[i].totalOrderPrice()) {
                best = clients[i];
            }
        }
        return best;
    }

    toString(){
        return super.toString() + '\n'
        +'CLIENT COUNT: ' + this.clients.length + '\n'
        + 'TOTAL EARNINGS: ' + this.totalEarnings() + '€\n'
        + 'CLIENTS: ' + this.clients + '\n'
        + 'MIGLIOR CLIENT: ' + this.bestClient().toString();

    }   
    

}