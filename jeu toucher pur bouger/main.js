// On sélectionne le carré et le score
const carre = document.querySelector('#carre');
const scoreValeur = document.querySelector('#score-valeur');


// On définit les dimensions du plateau de jeu
const PlateaujeuLargeur = 500;
const PlateaujeuHauteur = 300;

// On initialise le score à zéro
let score = 0;

// On définit la fonction qui sera appelée à chaque clic
function bougerCarre() {
  // On génère deux nombres aléatoires entre 0 et la largeur/hauteur du plateau
  const x = Math.floor(Math.random() * (PlateaujeuLargeur - 50));
  const y = Math.floor(Math.random() * (PlateaujeuHauteur - 50));
  
  // On incrémente le score
  score++;
  scoreValeur.textContent = score;
  
  // On modifie la position du carré en conséquence
  carre.style.top = y + 'px';
  carre.style.left = x + 'px';
}

// On ajoute l'événement de clic au document
document.addEventListener('click', bougerCarre);
