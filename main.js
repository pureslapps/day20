//     $(".result").html( data );
// });
//
//
// fetch('http://ecample.com/movies.json') then(funtion(response ) {
//
// })
//
// class XMLHttpRequest() {
//   constructor() {
//
//   }
//
//   onreadystatechange() {
//
//   }
// }
//
//
// AJAX request method
//
// function loadDoc() {
//   var xhttp = new XMLHttpRequest(); // create an XHR object request object
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      document.getElementById("demo").innerHTML = this.responseText; // the response text is very improtant
//     }
//   };
//   xhttp.open("GET", "ajax_info.txt", true); // open, then specify the get request, which the http (http verb, url, )
//   xhttp.send(); // invokes the XHR request,
// }
//
// loadDoc()
const ALL_CARS = []
cars_sorted = { }

function LoadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {  //everything takes place between this block; a block is indicated by curly braces
      document.getElementById('pull').innerHTML = this.responseText;
       let data = JSON.parse(this.responseText)  //changed the data from a string to a JS object with the "JSON.parse" // this line is used to contain the response information that we receive "this.responseText" which will be represented by "data"
       for (item in data) { // this function makes it so that you can pull specific information 
         let car = new Car(item,
                            data[item].make,
                            data[item].model,
                            data[item].model_year,
                            data[item].color)
      if (car.make =
      cars_sorted[data[item].make] = [data[item]]
      }
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/mlaw-nycda/empireCommerce/master/cars.json", true)
  xhttp.send(); // invoke the XHR request
}

class Car {
  constructor(vin, color, model, make, year) {
    this.vin = vin
    this.color = color
    this.model = model
    this.make = make
    this.year = year
    if (ALL_CARS.length < 15) {
      ALL_CARS.push(this) //
    }
  }
}

loadDoc("", Car)
