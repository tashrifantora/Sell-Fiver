// Function for [Get Product Name]
function getProductName(name) {
    const productName = document.getElementById(name).innerText;

    return productName;
}

// Function for [Get Product Price]
function getProductPrice(price) {
    const productPriceString = document.getElementById(price).innerText;
    const productPrice = parseFloat(productPriceString);

    return productPrice;
}

// Function for Create new element for selected product store
function createNewElement(productName) {
    const selectedProductContainer = document.getElementById('selected-product');
    const count = selectedProductContainer.childElementCount;

    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${productName}`;
    selectedProductContainer.appendChild(p);
}


// Function for Do the some
let PreviousTotalPrice = 0;
function doTheMath(productPrice) {
    const newTotal = PreviousTotalPrice + productPrice;
    PreviousTotalPrice = newTotal;

    // Set the Total money
    const totalPriceSet = document.getElementById('total-price').innerText = newTotal.toFixed(2);

    document.getElementById('grand-total').innerText = newTotal.toFixed(2);


    // Validation for MakePurchase btn
    if (totalPriceSet > 0) {
        document.getElementById('Purchase-btn').disabled = false;
    }
    else {
        document.getElementById('Purchase-btn').disabled = true;
    }

    // Validation for coupon Apply btn
    if (totalPriceSet >= 200) {
        document.getElementById('apply-btn').disabled = false;
    }
    else {
        document.getElementById('apply-btn').disabled = true;
    }

}


// Function for discount
function discount() {
    const discountFieldString = document.getElementById('discount-field');
    const discountField = discountFieldString.value;

    if (discountField === "SELL200") {
        // Get the total Price & make it Integer
        const totalPriceString = document.getElementById('total-price').innerText;
        const totalPrice = parseFloat(totalPriceString);

        // Discount math
        const discountAmount = (totalPrice * 20 / 100);

        // Set the discount amount in Discount
        document.getElementById('discount-amount').innerText = discountAmount.toFixed(2);

        // Total math 
        grandTotal = totalPrice - discountAmount;

        document.getElementById('grand-total').innerText = grandTotal;
    }
    else {
        alert('Your Promo Code is not valid')
    }
    discountFieldString.value = '';
}



// 1. Product sports Cap
function capNameAndPrice() {
    const capName = getProductName('product-cap');
    const capPrice = getProductPrice('price-cap');
    createNewElement(capName);
    doTheMath(capPrice)
}

// 2. Product Sports Jersey
function jerseyNameAndPrice() {
    const jerseyName = getProductName('product-jersey');
    const jerseyPrice = getProductPrice('price-jersey');
    createNewElement(jerseyName);
    doTheMath(jerseyPrice);
}

// 3. Product Sports Shoes 
function shoesNameAndPrice() {
    const shoesName = getProductName('product-shoes');
    const shoesPrice = getProductPrice('price-shoes');
    createNewElement(shoesName);
    doTheMath(shoesPrice);

}

// 4. Product Furniture Chair 
function chairNameAndPrice() {
    const chairName = getProductName('product-chair');
    const chairPrice = getProductPrice('price-chair');
    createNewElement(chairName);
    doTheMath(chairPrice);
}


// 5. Product Furniture Children play 
function childrenPlayNameAndPrice() {
    const childrenPlayName = getProductName('product-children-Play');
    const childrenPlayPrice = getProductPrice('price-children-Play');
    createNewElement(childrenPlayName);
    doTheMath(childrenPlayPrice);
}

// 6. Product Flexible Sofa
function sofaNameAndPrice() {
    const sofaName = getProductName('product-sofa');
    const sofaPrice = getProductPrice('price-sofa');
    createNewElement(sofaName);
    doTheMath(sofaPrice);
}




// Go to home & clear price amount
document.getElementById('go-home-btn').addEventListener('click', function () {
    document.getElementById('total-price').innerHTML = "00";
    document.getElementById('discount-amount').innerHTML = "00";
    document.getElementById('grand-total').innerHTML = "00";

    const selectedProductContainer = document.getElementById('selected-product').innerHTML = '';
    if (selectedProductContainer === '') {
        document.getElementById('Purchase-btn').disabled = true;
        document.getElementById('apply-btn').disabled = true;
    }
})
