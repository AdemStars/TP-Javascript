
function jourdelasemaine(x){
    
	var aujourdhui= new Date;

	jour=aujourdhui.getDay();
	var jourFrancais ;

	switch (jour) {
		case 0 : jourFrancais="dimanche";
            break;
		case 1 : jourFrancais="lundi";
            break;
		case 2 : jourFrancais="mardi";
            break;
		case 3 : jourFrancais="mercredi";
            break;
		case 4 : jourFrancais="jeudi";
            break;
		case 5 : jourFrancais="vendredi";
            break;
		case 6 : jourFrancais="samedi";
            break;
		default: jourFrancais="jour inexistant"; 
            break;
	}

	alert("Aujourd'hui on est "+jourFrancais+".");
}
