

// each user needs a name and location 
// the name and location should be generated randomly. In this case , im gonna use a npm library called 
// faker that can generate a lot of information such name and addresses

import faker from "faker";
export class User {
    // here we are saying to ts we are gonna have property,
    // one of them is name which string and a location object;
    // This is for ts only.
    name:string;
    location: {
        lat:number;
        lng:number
    };
    constructor(){
        this.name = faker.name.findName();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude()),
        }
    }
    markContent():string {
        return `<h2>User name: ${this.name} </h2>`
    }
}
}
 