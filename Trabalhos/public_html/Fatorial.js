/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function fatorial(){
    var num= parseFloat(document.querySelector("#valor1").value);
    var fatorial=1;
    var cont;
    for(cont=1; cont <= num; cont=cont+1){
        fatorial= fatorial*cont;      
    }
    document.querySelector("#resposta").innerHTML= fatorial;
    alert(fatorial);
}