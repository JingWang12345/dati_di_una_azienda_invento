class Employees extends Person{
  constructor(name, surname,  clients){
        super(name, surname);
        this.clients = clients;
    }

    addClient(newClient){
        this.clients.push(newClient)
    }

    totalEarnings(){
        let total = 0;
        for (let i = 0; i < this.totalOrderPrice.length; i++) {
            const order = this.totalOrderPrice[i];
            total+= order.totalOrderPrice();
        }
        return total;
    
    }

    bestClient(){
        const clients = this.clients;
        let bestClient = clients[0];
        for (let i = 1; i < this.clients.length; i++) {
            const actualClientt = clients[i];
            const bestTotal = bestClient.order.totalOrderPrice();
            const actualTotal = actualClient.order.totalOrderPrice();
            if (actualTotal > bestTotal) {
                bestClient = actualClient;
            }
        }
        return bestClient;
    }

    toString(){
        return super.toString() + '\n'
        +'CLIENT COUNT: ' + this.clients.length + '\n'
        + 'TOTAL EARNINGS: ' + this.totalEarnings() + '\n'
        + 'CLIENTS: ' + this.clients + '\n'
        + 'MIGLIOR CLIENT: ' + this.bestClient();

    }   
    

}