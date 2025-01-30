function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active')
  }

  function closeMenu() {
    document.getElementById('navMenu').classList.remove('active')
  }

// Section 2 don

function selectionDon(don) {
  let optionsDon = document.getElementsByClassName("option-don")
  for (let i = 0; i < optionsDon.length; i++) {
      optionsDon[i].classList.remove("selectionnee")
  }
  document.getElementById(don).classList.add("selectionnee")
  mettreAJourBouton()
}

function selectionFrequence(frequence) {
  let optionsFrequence = document.getElementsByClassName("option-frequence")
  for (let i = 0; i < optionsFrequence.length; i++) {
      optionsFrequence[i].classList.remove("selectionnee")
  }
  document.getElementById(frequence).classList.add("selectionnee")
  mettreAJourBouton()
}

function mettreAJourBouton() {
  let donSelectionne = document.getElementsByClassName("option-don selectionnee")[0].getElementsByTagName("h3")[0].innerText
  let frequenceSelectionnee = document.getElementsByClassName("option-frequence selectionnee")[0].innerText.toLowerCase()
  document.getElementById("boutonDon").innerHTML = "<img src='Images/Icone/coeur.png' alt='Icône'> Faire un don de " + donSelectionne + "/" + frequenceSelectionnee
}

// Section 3 histoire de réussite

function changerImage(source, titre, description, date) {
  document.getElementById('grandeImage').getElementsByTagName('img')[0].setAttribute('src', source);

  document.getElementById('texteImage').innerHTML = "<span>" + titre + "</span><br><br>" + description + "<br><br><small>" + date + "</small>"

  let miniatures = document.getElementsByClassName('miniature')
  for (let i = 0; i < miniatures.length; i++) {
      miniatures[i].classList.remove('active')
  }
  document.getElementById(titre.toLowerCase()).classList.add('active')
}

// Section 4 - Quizz

function afficherReponse(questions, estCorrect, message) {
  const question = document.getElementById(questions)

  const questionTitre = question.querySelector('h3').textContent

  const contenu = 
    '<h3>' + questionTitre + '</h3>' +
    '<div class="' + (estCorrect ? 'correct' : 'incorrect') + '">' +
    '<img src="Images/Icone/' + (estCorrect ? 'ok.png' : 'croix rouge.png') + '" alt="' + (estCorrect ? 'Vrai' : 'Faux') + '" class="icone">' +
    message + '</div>'
    
  // Remplacer le contenu 
  question.innerHTML = contenu;
}

// PAGE CONTACT
// Formulaire
function validationForm() {
  // Récuperation des champs
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const sujet = document.getElementById("sujet").value
  const message = document.getElementById("message").value

  // Récuperation des éléments erreur
  const errorName = document.getElementById("error-name")
  const errorEmail = document.getElementById("error-email")
  const errorMessage = document.getElementById("error-message")

  // Réinitialiser les messages d'erreur
  errorName.innerHTML = ""
  errorEmail.innerHTML = ""
  errorMessage.innerHTML = ""
  document.getElementById("confirmation").innerText = ""

  let isValid = true;

  // Verification du nom
  if (name === "") {
    errorName.innerHTML = "Veuillez entrer votre nom."
    isValid = false
  }
  
  // Vérification de l'email
  if (!email.includes("@")) {
    errorEmail.innerHTML = "Veuillez entrer une adresse email valide."
    isValid = false
  } else if (email === "") {
    errorEmail.innerHTML = "Veuillez entrer votre adresse email."
    isValid = false
  }

  // Vérification du message 
  if (message === "") {
    errorMessage.innerHTML =  "Veuillez entrer un message."
    isValid = false
  }

  // Verification du sujet
  if (sujet === "") {
    alert("Veuillez sélectionner un sujet.")
    isValid = false
  }

  // Si tout est valide
  if (isValid) {
    alert("Votre message a bien été envoyé !")
    document.getElementById("confirmation").innerText = "Votre message a bien été envoyé !"
  }

  return isValid
}



