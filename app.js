// common function

// Quantity

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

    let getProductPrice = document.getElementById(product + '-price')
    getProductPrice.innerText = totalProduct * price;

}


//Update quantity total 



document.getElementById('case-plus').addEventListener('click', function () {

    updateProductQuantity('case', 59, true)


})

document.getElementById('case-minus').addEventListener('click', function () {

    updateProductQuantity('case', 59, false);


})

