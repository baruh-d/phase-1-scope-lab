// Write your solution in this file!
let customerName = 'bob';

function upperCaseCustomerName(){
customerName = customerName.toUpperCase();
}
function setBestCustomer(){
bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
var newBestCustomer = new Object;
newBestCustomer.eVar1 = 'maybe bob';
newBestCustomer.events = 'events2';
}

const LeastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer(){
throw new Error('Assignment to constant variable.');
}