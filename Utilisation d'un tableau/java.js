
var tab = new Array(-2,1,4) ;

function additionne(x){
    return x+2;
}
function affiche(){
    alert(additionne(tab[0]));
    alert(additionne(tab[tab.length-1]));
}