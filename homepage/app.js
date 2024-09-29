function add() {
    let pricev = document.getElementById('price').innerText;
    let pnv = parseFloat(pricev);
    let npv = pnv + 250
    document.getElementById('price').innerText = npv;
    let cartv = document.getElementById('citems').innerText;
    let cartnv = +cartv
    let ncv = cartnv + 1
    document.getElementById('citems').innerText = ncv ;
}
function removeall() {
    document.getElementById('price').innerText = "0.00";
    document.getElementById('citems').innerText = 0 ;
}