function updateProductQuantity(product, price, isIncrease) {


    // get product quantity input field
    let productQuantity = document.getElementById(product + '-total');

    let productQuantityValue = parseInt(productQuantity.value);



    if (isIncrease == true) {
        productQuantity.value = productQuantityValue + 1;
    }

    else if (isIncrease == false && productQuantityValue > 0) {
        productQuantity.value = productQuantityValue - 1;
    }

    productQuantityValue = parseInt(productQuantity.value);
    let getPrice = document.getElementById(product + '-price');
    getPrice.innerText = productQuantityValue * price;


    // call for total
    calculateTotal();

}

function productInput(product) {

    let productInput = document.getElementById(product + '-total').value;
    productInputNum = parseInt(productInput);
    return productInputNum;

}

function calculateTotal() {
    let phoneTotal = productInput('phone') * 1200;
    let caseTotal = productInput('case') * 179;
    let priceTotal = phoneTotal + caseTotal;

    let subTotal = document.getElementById('subtotal');
    let tax = document.getElementById('tax');
    let total = document.getElementById('total');

    subTotal.innerText = priceTotal;
    tax.innerText = priceTotal / 20 // 20%  tax
    total.innerText = priceTotal + priceTotal / 20;

}



// click phone 


document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductQuantity('phone', 1200, true);

})

document.getElementById('phone-minus').addEventListener('click', function () {

    updateProductQuantity('phone', 1200, false)
})

// click case 

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductQuantity('case', 179, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductQuantity('case', 179, false)
})
