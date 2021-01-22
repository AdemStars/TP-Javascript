function formulaire()
      {
var s=document.getElementById('sexe').value; //RECUPERATION DU SEXE
var x = document.getElementById('donnees'); // RECYORATUIB DU NOM
var text = "";
var f=""; // VARIABLE POUR LE E DE BIENVENUE

if(s=='Homme')
    {s="Monsieur"; f=""}    //* EN FONCTION DU SEXE RAJOUTER UN E OU PAS A BIENVENUE
              else
              {s="Madame";f="E"}    
text = s + " " + x.elements["nom"].value +" BIENVENU"+f;            
          //CREATION DU TEXT ET DE SON CONTENANT , VARIABLE EN FONCTION DU SEXE ET DU NOM 
alert(text); // ALERT QUI REPREND LE TEXT
      }


function surface(){
var a=document.getElementById("numb").value;
var b=document.getElementById("numb1").value;
var c;
c=a*b;
alert('la surface  est de: '+c);
    
}


