/* Desenvolvido por Anderson */
var matriz=new Array(9);
var vezdejogar=0;
var qtdJogadas=0;

function JogoDaVelha(posicao){
     //document.querySelector("#01").innerHTML= "X";
     //document.getElementById("01").value="X";
    // matriz[0]="ras";
    // matriz[1]="andere"; 
    var posicaopeca ="0"+posicao;
    
     if (vezdejogar === 0) {
        if (document.getElementById(posicaopeca).value !== 'X' && document.getElementById(posicaopeca).value !== '0') {
            document.getElementById(posicaopeca).value = "X";
            qtdJogadas++;
            verificaStatusJogo();
            vezdejogar = 1;
        }
    } else if (document.getElementById(posicaopeca).value !== 'X' && document.getElementById(posicaopeca).value !== '0') {
        document.getElementById(posicaopeca).value = "0";
        qtdJogadas++;
        verificaStatusJogo();
        vezdejogar = 0;
    }
}
  function verificaStatusJogo(){
       var status="Empate";
        if ((document.getElementById("01").value === 'X') && (document.getElementById("02").value === 'X') && (document.getElementById("03").value === 'X')) {
            alert("Venceu o jogar X!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("04").value === 'X') && (document.getElementById("05").value === 'X') && (document.getElementById("06").value === 'X')) {
            alert("Venceu o jogar X!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("07").value === 'X') && (document.getElementById("08").value === 'X') && (document.getElementById("09").value === 'X')) {
            alert("Venceu o jogar X!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("01").value === 'X') && (document.getElementById("04").value === 'X') && (document.getElementById("07").value === 'X')) {
            alert("Venceu o jogar X!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("02").value === 'X') && (document.getElementById("05").value === 'X') && (document.getElementById("08").value === 'X')) {
            alert("Venceu o jogar X!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("03").value === 'X') && (document.getElementById("06").value === 'X') && (document.getElementById("09").value === 'X')) {
            alert("Venceu o jogar X!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("01").value === 'X') && (document.getElementById("05").value === 'X') && (document.getElementById("09").value === 'X')) {
            alert("Venceu o jogar X!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("07").value === 'X') && (document.getElementById("05").value === 'X') && (document.getElementById("03").value === 'X')) {
            alert("Venceu o jogar X!!!");
            status= "Vencedor";
        }
        //para 0
        if ((document.getElementById("01").value === '0') && (document.getElementById("02").value === '0') && (document.getElementById("03").value === '0')) {
            alert("Venceu o jogar 0!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("04").value === '0') && (document.getElementById("05").value === '0') && (document.getElementById("06").value === '0')) {
            alert("Venceu o jogar 0!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("07").value === '0') && (document.getElementById("08").value === '0') && (document.getElementById("09").value === '0')) {
            alert("Venceu o jogar 0!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("01").value === '0') && (document.getElementById("04").value === '0') && (document.getElementById("07").value === '0')) {
            alert("Venceu o jogar 0!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("02").value === '0') && (document.getElementById("05").value === '0') && (document.getElementById("08").value === '0')) {
            alert("Venceu o jogar 0!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("03").value === '0') && (document.getElementById("06").value === '0') && (document.getElementById("09").value === '0')) {
            alert("Venceu o jogar 0!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("01").value === '0') && (document.getElementById("05").value === '0') && (document.getElementById("09").value === '0')) {
            alert("Venceu o jogar 0!!!");
            status= "Vencedor";
        }
        if ((document.getElementById("07").value === '0') && (document.getElementById("05").value === '0') && (document.getElementById("03").value === '0')) {
            alert("Venceu o jogar 0!!!");
            status= "Vencedor";
        }
       if((status.localeCompare("Vencedor")!==0) && (qtdJogadas ===9)){
            alert("O jogo ficou empatado!!!");
        }
  } 
  function ReiniciarJogo() {
    var cont;
    var posicaopeca;
    for (cont = 1; cont <= 9; cont++) {
        posicaopeca = "0" + cont;
        document.getElementById(posicaopeca).value = " ";
    }
    vezdejogar = 0;
    qtdJogadas = 0;
}

