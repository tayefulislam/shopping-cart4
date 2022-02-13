// // common function
let subTotal = 0;
// // Quantity


function updateProductQuantity(product, price, isIncresing) {


    let productQuantity = document.getElementById(product + '-total');

    let totalProduct = parseInt(productQuantity.value);


    if (isIncresing) {
        productQuantity.value = totalProduct + 1;

    }
    else if (productQuantity.value > 0) {

        productQuantity.value = totalProduct - 1;

    }
    totalProduct = productQuantity.value;



    //Update quantity total 

    let getProductPrice = document.getElementById(product + '-price');
    getProductPrice.innerText = totalProduct * price;

    calculateTotal()

}

function getInputValue(product) {


    let inputValue = document.getElementById(product + '-total').value;
    return inputValue;

}


function calculateTotal() {

    let totalPhone = getInputValue('phone') * 1219;
    let totalCase = getInputValue('case') * 59
    let subTotal = totalPhone + totalCase;

    let tax = subTotal / 10;

    let total = subTotal + tax;
    console.log(total);

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}



// phone total

// click button : increasing product quantity
document.getElementById('phone-plus').addEventListener('click', function () {

    updateProductQuantity('phone', 1219, true);

})

// click button: decreesing product quantity

document.getElementById('phone-minus').addEventListener('click', function () {

    updateProductQuantity('phone', 1219, false);
})





//Update case total 

document.getElementById('case-plus').addEventListener('click', function () {

    updateProductQuantity('case', 59, true);

})

document.getElementById('case-minus').addEventListener('click', function () {

    updateProductQuantity('case', 59, false);

})

