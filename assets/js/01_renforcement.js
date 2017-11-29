// -- Déclarer un Tableau Numérique.
var Prénoms = ["Hugo", "Yann", "Baya", "Bryan", "Leslie"];

// -- Aperçu dans la console.
console.log(Prénoms);

// -- Si je veux connaître le nombre d'éléments (Prénoms) de mon Tableau ?
var NombreÉlémentsDansMonTableau = Prénoms.length;
console.log(NombreÉlémentsDansMonTableau);

// -- Poun récupérer une valeur dans le tableau numérique j'utilise son indice (index).
console.log(Prénoms[2]); // Baya
console.log(Prénoms[4]); // Leslie
var i = 3;
console.log(Prénoms[i]);
// -- Pour i = 0 (au départ i vaut 0) ; tant que i < (est strictement inférieur) à NombreÉlémentsDansMonTableau (Prénoms.length) ; alors i++ (j'incrémente successivement i de 1 à chaque itération (tour de boucle)).
for (let i = 0; i < NombreÉlémentsDansMonTableau; i++)
{
  // -- Tout ce qui est situé à l'intérieur des accolades, sera dans la boucle.
  console.log('Ici, i = ' + i);
  console.log(Prénoms[i]);
  console.log('---');
} // Fin boucle for

// -- Voyons maintenant comment procéder avec les objets.
var Contact = {
//  indice         valeur
    prénom      :   "Hugo",
    nom         :   "Liegeard",
    âge         :   27
};

// -- Aperçu dans la console
console.log(Contact);

// -- Pour récupérer les valeurs d'un objet j'utilise le «.» suivi de l'indice.
console.log("Prénom : " + Contact.prénom);
console.log("Nom : " + Contact.nom);
console.log("Âge : " + Contact['âge'] + " ans"); // Autre possibilité

var Contacts = [
  "Hugo",
  "Yann",
  {
    prénom      :   "Bryan",
    nom         :   "DELCAMBRE",
    âge         :   21
  },
  {
    prénom      :   "Baya",
    nom         :   "MEFTAH",
    âge         :   27
  }
];
// -- Aperçu dans la console.
console.log(Contacts);

// -- Comment accéder aux valeurs de mon objet, dans le tableau numérique...
  // -- 1. D'abord, je récupère mon objet.
  console.log(Contacts[2]);
  // -- 2. Pour accéder aux valeurs de mon objet.
  console.log("Prénom : " + Contacts[2].prénom);
  console.log("Nom : " + Contacts[2].nom);
  console.log("Âge : " + Contacts[2].âge);
  // -- En résumé, j'accède à la valeur de l'indice "prénom" de l'objet situé à l'index 2 de mon tableau numérique "Contacts".
  // -- Comment parcourir un tableau avec des objets.
  // -- Supposons le tableau suivant :
  var Étudiants = [
    {prenom : "Hugo", nom : "Liegeard", classe : "Terminale S"},
    {prenom : "Yann", nom : "Dervaux", classe : "Maternelle"},
    {prenom : "Baya", nom : "Meftah", classe : "Crèche"},
    {prenom : "Bryan", nom : "Delcambre", classe : "CP"},
    {prenom : "Kasia", nom : "Karwat", classe : "Petite Section"},
    {prenom : "Jean Romain", nom : "Cachera", classe : "Master II"},
  ];
  // -- Regardons dan la console
  console.log(Étudiants);

  // -- Si je veux connaître le nombre d'étudiants
  var NombreÉtudiants = Étudiants.length;
  console.log("Nombre d'étudiants = " + NombreÉtudiants);

  /*---------------------------------------------------------------
   |                  Exercice                                    |
   |                                                              |
   |  Afficher dans la page HTML à l'aide de JQuery la liste      |
   |  (ul > li) des étudiants et leur classe.                     |
   |                                                              |
   ---------------------------------------------------------------*/

  $(function () {
    console.log("JQuery est prêt");
    var body = $("body");
    body.append ("<h1>Liste des victimes</h1>");
    var ul = $('<ul>');
    body.append(ul);
    for (let i = 0; i < NombreÉtudiants; i++)
    {
      let étudiant = Étudiants[i];

      ul.append(`
        <li>
          <strong>
            ${étudiant.prenom} ${étudiant.nom}
          </strong>
           - ${étudiant.classe}
        </li>
      `);
    }
  });
