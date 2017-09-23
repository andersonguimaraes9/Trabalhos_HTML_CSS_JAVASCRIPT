/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function imc(){
    var peso= parseFloat(document.querySelector("#peso").value);
    var altura= parseFloat(document.querySelector("#altura").value);
    var imc=0;   
    imc= peso /(altura*altura);
    document.querySelector("#result").value= imc;
    if(imc < 18.5){
        alert("Abaixo do Peso");
    }
    else if(imc >= 18.6 && imc <=24.9){
        alert("Peso ideal(Parabens)");
    }
    else if(imc >= 25.0 && imc <=29.9){
        alert("levemente acima do peso");
    }
    else if(imc >= 30.0 && imc <=34.9){
        alert("Obsidade grau 1");
    }
    else if(imc >= 35.0 && imc <=39.9){
        alert("Obsidade grau 2(Severa)");
    }
    else{
        alert("Obsidade grau 3(Morbida)");
    }
}


