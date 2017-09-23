/* 
    Created on : 16/09/2017, 23:33:06
    Author     : Anderson
*/
function bissexto(){
    var num= parseFloat(document.querySelector("#valor1").value);
    
    if (num % 4 ===0 || num % 400 ===0){
        if (num % 100 !==0)
          document.querySelector("#resposta").innerHTML= "Este ano e bissesto";
    }
    else{
        document.querySelector("#resposta").innerHTML= "NAO e bissesto";
    }

}
