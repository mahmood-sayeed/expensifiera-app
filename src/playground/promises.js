const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Sayeed Mahmood',
            age: 20
        });
        // reject('something went wrong');
    }, 3500);
});

console.log('before');

//resolve callback
promise.then((data) => {
    console.log('1', data);
    return 'some data';     //this text gets passed down to str
}).then((str) => {
    console.log('2', str);
}).catch((error) => {
    console.log('error: ', error);  //if reject then catch
});

//you can also return an entirely new promise in which the success case would be the next 'then'
promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('some other promise');
        }, 5500);
    });     
}).then((str) => {
    console.log('2', str);
}).catch((error) => {
    console.log('error: ', error);  
});

//second way to catch
promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log('error: ', error);  //if reject then catch
});

console.log('after');