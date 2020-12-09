console.log('destructuring');

const person = {
    name: 'Mathew',
    age: 35,
    location: {
        city: 'Berlin',
        temp: 18
    }
};

const { name = 'Anonymous', age } = person;  //if not person.name, default anonymous
// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}.`);

const { city, temp: temperature } = person.location;        //initializing a new const local variable called temperature and put value of temp
if (city && temperature) {      //temp no longer accessible
    console.log(`It is ${temperature} in ${city}`);
}

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);



const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

