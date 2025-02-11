const form = document.getElementById('data_for_guest_check');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let product_name = document.getElementById('product_name').value;

    let food_tot =Number(document.getElementById('food_tot').value);

    let bev_tot = Number(document.getElementById('bev_tot').value);

    let pr_tax = Number(document.getElementById('pr_tax').value);

    let pr_tip = Number(document.getElementById('pr_tip').value);

    let tip = Number(document.getElementById('tip').value);

    let result = document.getElementById('result');

    result.innerHTML = calcGuestCheck()
})
