// console.log(document.getElementById('leg1').value);
// console.log(document.getElementById('leg2').value);
// console.log(document.getElementById('hypotenuse').value);



const form = document.getElementById('data_for_triangle');
form.addEventListener('submit', function (event){
    event.preventDefault();
    let leg1 = Number(document.getElementById('leg1').value);
    let leg2 = Number(document.getElementById('leg2').value);
    let hypotenuse = Number(document.getElementById('hypotenuse').value);

    console.log('leg1:',leg1, typeof leg1,'leg2:', leg2,typeof leg2,'hypotenuse:',hypotenuse, typeof hypotenuse)

    let result = document.getElementById('result')
    result.innerHTML = calcPythagorean(leg1, leg2, hypotenuse)

})

function calcPythagorean(leg1, leg2, hypotenuse){
    if (leg1 === 0 && leg2 === 0 || leg1 === 0 && hypotenuse === 0 || leg2 === 0 && hypotenuse === 0 || hypotenuse > 0 && hypotenuse < leg1 || hypotenuse > 0 && hypotenuse < leg2 || leg1 > 0 && leg2 > 0 && hypotenuse > 0 || leg1 === hypotenuse || leg2 === hypotenuse || leg1 < 0 || leg2 < 0 || hypotenuse < 0 ){
        return 'Error. You put less then 2 numbers or your hypotenuse less then leg or you put all variables, or your leg = hypotenuse, or some number less then 0. Please, fix it and try again.'
    }
    if(leg1 !== 0 && hypotenuse !== 0 || leg2 !== 0 && hypotenuse !== 0) {
        if (leg1 !== 0 && hypotenuse !== 0){
            leg2 = Math.sqrt(hypotenuse ** 2 - leg1 ** 2)
            leg2 = leg2.toFixed(2)
            return `Leg2 = ${leg2}`
        }else {
            leg1 = Math.sqrt(hypotenuse ** 2 - leg2 ** 2)
            leg1 = leg1.toFixed(2)
            return `Leg1 = ${leg1}`
        }
    }else {
        hypotenuse = Math.sqrt(leg1 ** 2 + leg2 ** 2 )
        hypotenuse = hypotenuse.toFixed(2)
        return `Hypotenuse = ${hypotenuse}`
    }
}

console.log(calcPythagorean(1, 4, 7))
