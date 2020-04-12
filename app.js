const myFunction = function() {
    console.log("normal function")
  }

  const myFunction2 = () => {
    console.log("arrow function")
  }

  myFunction();
  myFunction2();

  const myFunctionOneLine = () => console.log("arrow function 1 line")
    myFunctionOneLine();

//1 param arrow function
const myFunctionOneParame = param => console.log("arrow function 1 param==> "+param);
myFunctionOneParame('david');

//implicit return arrow function
const myFunctionOneImplicit = param => param;
console.log(myFunctionOneImplicit('david'));

//returning an object
const myFunctionReturnObject = () => ({value : 'test'});
console.log(myFunctionReturnObject());

const car = {
    model : 'fiesta',
    manufacturer : 'Ford',
    fullName: function () {
        return `${this.manufacturer} ${this.model}`
    }
}

console.log(car.fullName());

//arrow function this example
const carArrowFunction = {
    model : 'Fiesta',
    manufacturer : 'Ford',
    fullName: () => {
        return `${this.manufacturer} ${this.model}`
    }
}
//should print undefined undefined as this scope in arrow function is inherited 
//from the execution context arrow function should never be used as object method
console.log(carArrowFunction.fullName());
