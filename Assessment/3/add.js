let hotel = function(name, city, address){
    this.hotelName = name;
    this.hotelcity = city;
    this.hotelAddress = address;
}  

let addrec = function(){
    this.hotelData = [];  
    
    this.addEmployee = function(hotel){
        this.hotelData.push(hotel);
        
    }

    this.getAll = function(){
        return this.hotelData;
    }