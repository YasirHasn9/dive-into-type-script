


// before if you go down , you ll see that the custom map depends on several
//  class, hoping that these class have something in common 
// but with interface we can force these class obey the rule by telling 
// them hey , if you show on the map , you have the rules of this interface
interface Mappable {

    // so each class that wanna show on the map , wether is Company , user or 
    // whatever class , you should have this object with these properties
    location: { 

        lat:number,
        lng:number
    };
    markContent(): string;

}

// originally , the global object of google has a lot of methods 
// playing with these methods may break our app.
// so to prevent other engineers from that, we can create a custom map object and limit it 
// so others cant play with it 


// CustomMaps will internally will create a google maps for us 
// because we don't other to get access to google, so we need to isolate the google 
// and only expose a bare minimum amount of functionality
export class CustomMap{
    // it would instance of the object of google Map class

    // note that each type we wrote has a modifier which by default a public 
    // which means that we can use this even outside the function/class
    // but because of our goal which we want to make the google as private as we can
    // to do so we are going to use the private modifier
    // which means we can reference its property from outside the class
    private googleMap : google.maps.Map;

    // when we hard coded the name of the id, we limit ourselves from reuse in different places 
    // so to make reusable in many places we can create an argument and use wherever we want
    constructor(divID:string){
        this.googleMap = new google.maps.Map(document.getElementById(divID) , {
            zoom:1,
            center: {
                lat:0,
                lng:0,
            }
        })
    }

    // bad code 
    /*
    addUserMarker(user:User):void{
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:user.location.lat,
                lng:user.location.lat
            }
        })
    }
    addCompanyMarker(company:Company):void{
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:company.location.lat,
                lng:company.location.lng
            }
        })
    }
    */
    /*
    the bad thing about the above code is that both have the same purpose 
    so , we dont we create one that works on both
    */

    // good code 
    // but also it a bad approach
    addMaker(mappale:Mappable):void {
        const marker = new google.maps.Marker({
            map:this.googleMap,
            position: {
                lat:mappale.location.lat,
                lng:mappale.location.lng
            }
        })

        /*
        now the current issue with approach is that custom map has 
        a direct dependency on all the different classes inside of our 
        application , imagine if we have 30 class
            addMaker(client: C1 | C2 | ... C3):void
        */


        marker.addListener("click" , () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappale.markContent()
            })
            infoWindow.open(this.googleMap, marker)
        })

    
    }

    // best approach
    // to fix the above code , we need to invert this dependency
    // before the customMap was trying to satisfy  the classes that it relies on
    // but now we are gonna tell them , hey if you wanna work with the class CustomMap , you
    // have to obey the rules
    // the rules here is if you wanna be on map , you have th=o have location that is object
    // and that object should have lat and lng and both should be number 
}