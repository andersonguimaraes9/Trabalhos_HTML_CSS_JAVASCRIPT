/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Triangulo(){
    var num= parseInt(document.querySelector("#valor1").value);
    var i=0;j=0;
    var result="";
    
    if(num >= 1 && num <=9){
        for(i=1;i<=num;i=i+1){
            for(j=1;j<=i;j=j+1){
                result = result+ " "+ i;                  
            }
            result= result + "<br>";
        }
    }
    else{
        alert("Numero fora do intervalo estabelecido\n Intervado de 1 a 9");
    }
     document.querySelector("#resposta").innerHTML= result;
 
  
}


