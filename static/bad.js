/* function Undefined() {
    console.log('a', a);
}

Undefined();
 */

function promis() {
    return new Promise((resolve, reject) => {
        reject(1);
    })
}

promis().then(a => {
    console.log('aaaaaa', a);
});