import faker from "faker"

export class Company{
    companyName:string;
    catchPhrase:string;
    // this does not assign the location property it just tells ts that we have 
    // a location object 
    location: {
        lat:number;
        lng:number
    }

    constructor(){
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude()),
        }
    }

    markContent():string {
        return `
        <div>
        <h2>Company name: ${this.companyName} </h2>
        <h4>Catch phrase: ${this.catchPhrase} </h4>
        `
    }
}