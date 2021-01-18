function boucle(){
    var tab = new Array(3);
    
	for (var i=0;i<tab.length;i++)
					{
						tab[i]=i*i;					
					}
					
				alert(tab);
}

function boucle2(){
    var a = parseInt(prompt('Quelle est la longueur souhaitée du tableau?')); 
    //* windows.prompt ne marchant pas j'ai utiliser leur commande 
    var tab = new Array();
    
	for (var i=0;i<a;i++)
					{
						tab[i]=i*i;					
					}
					
    alert(tab);
}