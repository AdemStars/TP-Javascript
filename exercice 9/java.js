let notetab = [] ;

function noteadd(){
    
var note= document.getElementById("note").value;
    console.log(note);
    notetab.push(note);
    console.log(notetab);
    }
function calculer(){
    console.log(notetab.length);
    var N=notetab.length;
    var Moyenne=notetab/N;
    console.log(Moyenne);
}

