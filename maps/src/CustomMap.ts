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
    
}