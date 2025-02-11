const form = document.getElementById('data_for_guest_check');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let food_tot =Number(document.getElementById('food_tot').value);

    let bev_tot = Number(document.getElementById('bev_tot').value);

    let pr_tax = Number(document.getElementById('pr_tax').value);

    let pr_tip = Number(document.getElementById('pr_tip').value);

    let tip = Number(document.getElementById('tip').value);

    let result = document.getElementById('result');

    console.log(food_tot, bev_tot, pr_tax, pr_tip, tip)

    result.innerHTML = calcGuestCheck(food_tot, bev_tot, pr_tax, pr_tip, tip);

})

function calcGuestCheck(food_tot, bev_tot, pr_tax, pr_tip, tip){

    if(food_tot < 0 || bev_tot < 0 || pr_tax < 0 || tip !==0 && pr_tip !== 0 ||tip < 0 || pr_tip < 0 ){
        return `Error. Incorrect value`
    }

    let sub_tot = food_tot + bev_tot;
    let tax = pr_tax/100 * sub_tot;

    if(pr_tip > 0){
        tip = pr_tip/100
    }else{
        pr_tip = tip*100/sub_tot;
    }

    let total = (sub_tot + tax + tip).toFixed(2);

    return `JAVASCRIPT CAFE<br>GUEST CHECK:<br>    Food tot : $${food_tot}<br>    Bev tot : $${bev_tot}<br>    Sub-tot : $${sub_tot}<br>    Tax pct : ${pr_tax} %<br>    Tax tot : $${tax.toFixed(2)}<br>    Tip pct : ${pr_tip} %<br>    Tip tot : ${tip.toFixed(2)}<br>    TOTAL : $${total}<br>Thank you! `

}