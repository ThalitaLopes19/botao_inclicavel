function sim ( ) {
    alert("Obrigada por ter interagido! :)") 
 }

 function desvia(t) {
     var btn = t;
     btn.style.position = "absolute";
     btn.style.bottom = geraposicao (10, 90);
     btn.style.left = geraposicao (10, 90);
     console.log(btn);
     console.log("Opa, desviei kkkkk ");
 }
 function geraposicao( min, max) {
     return (Math.random () * (max - min) + min) + '%';

 }