let str = prompt('siz s li gap yozing')
// let str = 'sanda surnay sovolim sovun'
let fax = str.split('')
let qwer = []
for (let i = 0; i < fax.length; i++) {
    if (fax[i] == 's') {
       qwer.push(fax[i])
    } 
}
console.log(qwer.join('-') );
console.log(qwer.length);