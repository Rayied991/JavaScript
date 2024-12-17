class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    move(){
        console.log(`${this.name} is moving`);
    }
    start(){
        console.log(`${this.name} started`);
    }
    stop(){
        console.log(`${this.name} stopped`);
    }
}


class Bus extends Vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat=seat;
        this.ticketPrice=ticketPrice;
    }

    getAvailableSeat(){
        return this.seat;
    }
    getTicketPrice(){
        return this.ticketPrice;
    }
}

class Truck extends Vehicle{
    constructor(name,price,weight){
        super(name,price);
        this.weight=weight;
    }
    getAvailableWeight(){
        return this.weight;
    }
}

//objects 
const bus=new Bus('Bus',1000,50,500);
console.log(bus);
bus.start();
bus.stop();
console.log(bus.getAvailableSeat());
console.log(bus.getTicketPrice());

const truck=new Truck('Truck',5000,1000);
console.log(truck);
truck.start();
truck.stop();
console.log(truck.getAvailableWeight());
