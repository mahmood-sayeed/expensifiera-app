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
    return 'some data';     
}).then((str) => {
    console.log('2', str);
}).catch((error) => {
    console.log('error: ', error);  //if reject then catch
});

//second way to catch
promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log('error: ', error);  //if reject then catch
});

console.log('after');