// Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.


var person={
    fristname:"srujana",
    lastname:"katipally",
    age:"22"
}
console.log(person)
console.log(person.fristname)
person.city="newyork"
console.log(person)


// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object

var product={
    name:"icecream",
    price:"50",
    instock:"20"
}
console.log(product)
product.price="60"
console.log(product)
delete product.instock
console.log(product)


// Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.

var library={
    fantasy:["harry potter","lord of the rings"],
    myster:["sherlock holmes","nancy drew"],
    romance:["pride adn prejudice","romeo and juliet"]
}
    console.log(library)
    library.sciencefiction=["dune","ender's game"]
    console.log(library)
    console.log(library.fantasy[0])
    delete library.myster
    console.log(library)











// .Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.


var user={
    username:"srujana",
    email:"katipallysrujana@gmail.com",
    address:{
        city:"kamareddy",
        state:"telangana",
        zip:"503120"
    }
}
console.log(user)
   
   Object.freeze(user)
user.email="srujanakatipally10@gmail.com",
console.log(Object.isFrozen(user))
user.phone="9390548879"
console.log(user)


// create an object car with properties make , model,and price.then:
// seal the object using object.seal()
// try to delete the make property and check if the object is sealed using object.sealed()
// Modify the price property, and check if the object is still extensible using Object.isExtensible()



var car={
    make:"land rover",
    model:"range rover",
    price:120000
}
console.log(car)
Object.seal(car)
delete car.make;
console.log(Object.isSealed(car))
car.price=200000
console.log(Object.isExtensible(car))




const store = {
    name: "SuperMart",
    products: {
      electronics: {
        phones: {
          apple: {
            iPhoneX: { price: 999, stock: 20 },
            iPhone12: { price: 1099, stock: 15 },
          },
          samsung: {
            galaxyS21: { price: 799, stock: 25 },
            galaxyNote20: { price: 999, stock: 10 },
          },
        },
        laptops: {
          dell: {
            XPS13: { price: 1200, stock: 10 },
            Inspiron15: { price: 800, stock: 30 },
          },
          hp: {
            SpectreX360: { price: 1300, stock: 5 },
            Pavilion15: { price: 750, stock: 20 },
          },
        },
      },
      groceries: {
        fruits: {
          apples: { price: 2, stock: 100 },
          bananas: { price: 1, stock: 150 },
        },
        vegetables: {
          carrots: { price: 1.5, stock: 200 },
          spinach: { price: 1, stock: 100 },
        },
      },
    },
  };
   console.log(store.products.groceries.vegetables.spinach.stock)
   console.log(store.products.electronics.laptops.hp.Pavilion15.price)
  


