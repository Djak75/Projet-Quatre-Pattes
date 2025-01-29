function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
  }

  function closeMenu() {
    document.getElementById('navMenu').classList.remove('active');
  }

// Section don

function selectionDon(don) {
  let optionsDon = document.getElementsByClassName("option-don")
  for (let i = 0; i < optionsDon.length; i++) {
      optionsDon[i].classList.remove("selectionnee")
  }
  document.getElementById(don).classList.add("selectionnee")
  mettreAJourBouton();
}

function selectionFrequence(frequence) {
  let optionsFrequence = document.getElementsByClassName("option-frequence")
  for (let i = 0; i < optionsFrequence.length; i++) {
      optionsFrequence[i].classList.remove("selectionnee")
  }
  document.getElementById(frequence).classList.add("selectionnee")
  mettreAJourBouton();
}

function mettreAJourBouton() {
  let donSelectionne = document.getElementsByClassName("option-don selectionnee")[0].getElementsByTagName("h3")[0].innerText
  let frequenceSelectionnee = document.getElementsByClassName("option-frequence selectionnee")[0].innerText.toLowerCase()
  document.getElementById("boutonDon").innerHTML = "<img src='Images/Icone/coeur.png' alt='Icône'> Faire un don de " + donSelectionne + "/" + frequenceSelectionnee;
}

// Section 3 histoire de réussite

function changerImage(source, titre, description, date) {
  // Changer l'image principale avec setAttribute
  document.getElementById('grandeImage').getElementsByTagName('img')[0].setAttribute('src', source);

  // Mettre à jour le texte de l'image
  document.getElementById('texteImage').innerHTML = "<span>" + titre + "</span><br><br>" + description + "<br><br><small>" + date + "</small>";

  // Mettre à jour l'état actif des miniatures
  let miniatures = document.getElementsByClassName('miniature');
  for (let i = 0; i < miniatures.length; i++) {
      miniatures[i].classList.remove('active');
  }
  document.getElementById(titre.toLowerCase()).classList.add('active');
}

// Section 4 - Quizz
function afficherReponse(element, estCorrect, message) {
  // Réinitialiser les réponses
  var reponses = element.parentElement.getElementsByClassName('reponse');
  for (var i = 0; i < reponses.length; i++) {
      reponses[i].classList.remove('correct', 'incorrect');
      reponses[i].innerHTML = reponses[i].innerText; // Réinitialiser le contenu
  }

  // Ajouter l'icône et le message à la réponse cliquée
  element.classList.add(estCorrect ? 'correct' : 'incorrect');
  element.innerHTML = '<img src="' + (estCorrect ? 'Images/Icone/Ok.png' : 'Images/Icone/Croix rouge.png') + '" alt="' + (estCorrect ? 'Vrai' : 'Faux') + '"> ' + message;
}


