let mais = document.getElementById('plus');
let num = document.getElementById('num');
let menos = document.getElementById('minus');

let quantidade_produto = 1;

mais.addEventListener("click", ()=>{
    quantidade_produto++;
    quantidade_produto = (quantidade_produto < 10) ? "0"+ quantidade_produto : quantidade_produto;
    num.innerText = quantidade_produto;
})

menos.addEventListener("click", ()=>{
    if (quantidade_produto > 1){
        quantidade_produto--;
        quantidade_produto = (quantidade_produto < 10) ? "0"+ quantidade_produto : quantidade_produto;
        num.innerText = quantidade_produto;
    }
})

