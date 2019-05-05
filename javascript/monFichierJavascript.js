var verifier = function(){
	chaine = document.getElementById("entree").value;
	var resultat = document.getElementById('resultat');
	coupe = chaine.split("");
	inverse = coupe.reverse();
	recolle = inverse.join("");
	if(chaine == recolle && chaine != ""){
		resultat.innerHTML = "<span id='vrai'><b>" +chaine + "</b> est  un palindrome</span>" ;
	}	else if(chaine !== recolle) {
	resultat.innerHTML = "<span id='faux'><b>" +chaine + "</b> n'est pas un palindrome </span>" ;
	}	else{
		resultat.innerHTML = "<span id='faux'>Veuillez remplir une valeur !</span>";
	}
}
