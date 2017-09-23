function Humor(){
       var texto;
      //alert(document.querySelector("#esc").value);
       //if(document.querySelector("#esc").selectedIndex ===0)
       //    document.imagem.src='IMG/Bahia.png';
       switch (document.querySelector("#esc").selectedIndex) {
            case 0:
                document.imagem.src='IMG/Bahia.png';
                texto=document.querySelector("#nome").value+ "=Imagem de baiano";
                document.querySelector("#result").innerHTML= texto;             
                break;
            case 1:
                document.imagem.src='IMG/Portugues.png';
                texto=document.querySelector("#nome").value+ "=Imagem de Portugues";
                document.querySelector("#result").innerHTML= texto;
                break;
            case 2:
                document.imagem.src='IMG/Loira.png';
                texto=document.querySelector("#nome").value+ "=Imagem de Loira";
                document.querySelector("#result").innerHTML= texto;      
                break;
            case 3:
                document.imagem.src='IMG/Gaucho.png';
                texto=document.querySelector("#nome").value+ "=Imagem de Gaugho";
                document.querySelector("#result").innerHTML= texto;             
                break;
            case 4:
                document.imagem.src='IMG/Mineiro.png';
                texto=document.querySelector("#nome").value+ "=Imagem de Mineiro";
                document.querySelector("#result").innerHTML= texto; 
                break;
            default: 
                document.imagem.src='IMG/Imagem.png';
                console.log("Deu problema");
                break;
        }
       
    
}
   
