const form = document.getElementById('data_for_grocery');

form.addEventListener('submit', function (event){

    event.preventDefault();

    let product_name = document.getElementById('product_name').value;

    let prise_per_kg = Number(document.getElementById('price_per_kg').value);

    let amount_kg = Number(document.getElementById('amount_kg').value);

    let pr_tax = Number(document.getElementById('pr_tax').value);

    let delivery_fee = Number(document.getElementById('delivery_fee').value);

    console.log(product_name, prise_per_kg, amount_kg, pr_tax, delivery_fee)

    let result = document.getElementById('result')

    result.innerHTML = groceryPrice(prise_per_kg, amount_kg, pr_tax, delivery_fee )

})

function groceryPrice(prise_per_kg, amount_kg, pr_tax, delivery_fee){
    let subTotal = prise_per_kg * amount_kg;
    let tax = pr_tax/100;
    let total = subTotal + tax + delivery_fee;
    return `Your subtotal without delivery fee and tax = ${total}<br>
     Tax = ${tax}<br>
     Delivery fee = ${delivery_fee}<br>
     Total = ${total} `
}