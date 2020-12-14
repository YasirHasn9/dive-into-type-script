

// each user needs a name and location 
// the name and location should be generated randomly. In this case , im gonna use a npm library called 
// faker that can generate a lot of information such name and addresses

import faker from "faker";
class User {
    name:string;
    location: {
        lat:number;
        lng:number
    };

}