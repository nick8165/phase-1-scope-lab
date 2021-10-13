var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'nick';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    return bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'bob';
}