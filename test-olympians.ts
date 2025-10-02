// lancer en tapant dans la console :
// node --experimental-strip-types test-olympians.ts

import olympians from "./olympians.json" with { type: 'json' };

//** Compléter les en écrivant les parties :  */
/* TODO */
/* Désactiver COPILOT pour que vous fassiez l'effort de lire */

console.log("=== EXEMPLES DES MÉTHODES ARRAY AVEC LES DONNÉES OLYMPIANS ===\n");
console.log(`Nombre total d'olympiens: ${olympians.length}\n`);

// ===== MÉTHODES D'ACCÈS AUX ÉLÉMENTS =====

console.log("--- MÉTHODES D'ACCÈS AUX ÉLÉMENTS ---");

// at() - Accède à un élément par son indice (accepte les indices négatifs)
console.log("• at() - Premier olympien:", olympians.at(0)?.name);
console.log("• at() - Dernier olympien:", olympians.at(-1)?.name);
console.log();

// slice() - Extrait une portion du tableau
console.log("• slice() - Les 3 premiers olympiens:");
console.log(olympians.slice(0, 3).map(o => `${o.name} de ${o.nationality}`));
console.log();

// ===== MÉTHODES DE RECHERCHE ET VÉRIFICATION =====

console.log("--- MÉTHODES DE RECHERCHE ET VÉRIFICATION ---");

// find() - Trouve le premier élément qui satisfait une condition
const premierAthletics = olympians.find(o => o.sport === "athletics");
console.log("• find() - Premier athlète d'athlétisme:", premierAthletics?.name);

// findIndex() - Trouve l'indice du premier élément qui satisfait une condition
const indexAthletics = olympians.findIndex(o => o.sport === "athletics");
console.log("• findIndex() - Index du premier athlète d'athlétisme:", indexAthletics);

// indexOf() - Trouve l'indice d'un élément (comparaison stricte)
const sports = olympians.map(o => o.sport);
console.log("• indexOf() - Index de 'swimming' dans la liste des sports:", sports.indexOf('swimming'));

// lastIndexOf() - Trouve le dernier indice d'un élément
console.log("• lastIndexOf() - Dernier index de 'athletics':", sports.lastIndexOf('athletics'));

// includes() - Vérifie si un élément existe dans le tableau
const nationalites = olympians.map(o => o.nationality);
console.log("• includes() - Nationalité 'FRA' existe-t-elle?", nationalites.includes('FRA'));

// some() - Teste si au moins un élément satisfait une condition
const auMoinsUnLourd = olympians.some(o => o.weight != null && o.weight > 100);
console.log("• some() - Y a-t-il des olympiens > 100kg?", auMoinsUnLourd);

// every() - Teste si tous les éléments satisfent une condition
const tousOntPoids = olympians.every(o => o.weight != null && o.weight > 0);
console.log("• every() - Tous ont un poids > 0?", tousOntPoids);
console.log();

// ===== MÉTHODES DE FILTRAGE =====

console.log("--- MÉTHODES DE FILTRAGE ---");

// filter() - Crée un nouveau tableau avec les éléments qui passent un test
const olympiensMales = olympians.filter(o => o.sex === "male");
console.log("• filter() - Nombre d'hommes:", olympiensMales.length);

const olympiensLourds = olympians.filter(o => o.weight != null && o.weight > 80);
console.log("• filter() - Olympiens > 80kg:", olympiensLourds.length);
console.log();

// ===== MÉTHODES DE TRANSFORMATION =====

console.log("--- MÉTHODES DE TRANSFORMATION ---");

// map() - Transforme chaque élément et crée un nouveau tableau
const descriptions = olympians.slice(0, 3).map(o =>
    `${o.name} (${o.sex}) - ${o.weight}kg`
);
console.log("• map() - Descriptions des 3 premiers:");
descriptions.forEach(desc => console.log("  ", desc));

/* IMPORTANT : noter ce code 
 * L'usage de `map` pour n'extraire qu'une propriété.
 * Et l'usage de `[...new Set()]` sur le résultat pour ne garder que les noms uniques
 * Cela servira pour le prochain TP
 */
const nomsSports = olympians.map(o => o.sport);
console.log("• map() - Sports uniques:", [...new Set(nomsSports)]);

// flatMap() - Applique une fonction puis aplatit d'un niveau
const caracteristiques = olympians.slice(0, 2).flatMap(o =>
    [o.name, o.nationality, o.sport]
);
console.log("• flatMap() - Caractéristiques aplaties:", caracteristiques);

// reduce() - Réduit le tableau à une seule valeur
const poidsTotalOlympiens = olympians.reduce((total, o) =>
    o.weight != null ? total + o.weight : total, 0
);
console.log("• reduce() - Poids total:", poidsTotalOlympiens, "kilogrammes");

const nbrParSport = olympians.reduce((acc, o) => {
    acc[o.sport] = (acc[o.sport] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log("• reduce() - Comptage par sport:", nbrParSport);

// reduceRight() - Réduit de droite à gauche
const derniersNoms = olympians.slice(-3).reduceRight((acc, o) =>
    acc + o.name + " ", ""
);
console.log("• reduceRight() - 3 derniers noms (inversés):", derniersNoms.trim());
console.log();

// ===== MÉTHODES DE TRI =====

console.log("--- MÉTHODES DE TRI ---");

// sort() - Trie les éléments (modifie le tableau original)
const poidsCopie = olympians.slice(0, 5).map(o => o.weight).filter(w => w != null);
console.log("• sort() - Poids avant tri:", poidsCopie);
poidsCopie.sort((a, b) => a - b);
console.log("• sort() - Poids après tri croissant:", poidsCopie);

// Tri par sport
const olympiensParSport = olympians.slice(0, 10).sort((a, b) =>
    a.sport.localeCompare(b.sport)
);
console.log("• sort() - 10 premiers triés par sport:");
olympiensParSport.forEach(o => console.log(`  ${o.sport} - ${o.name}`));
console.log();

// ===== MÉTHODES D'ITÉRATION =====

console.log("--- MÉTHODES D'ITÉRATION ---");

// forEach() - Exécute une fonction pour chaque élément
console.log("• forEach() - Affichage des 3 premiers olympiens:");
olympians.slice(0, 3).forEach((o, index) => {
    console.log(`  ${index + 1}. ${o.name} de ${o.nationality} (${o.weight}kg)`);
});


// ===== MÉTHODES DE CONVERSION =====

console.log("--- MÉTHODES DE CONVERSION ---");

// join() - Joint tous les éléments en une chaîne
const premiersNoms = olympians.slice(0, 5).map(o => o.name);
console.log("• join() - Noms séparés par ' | ':", premiersNoms.join(" | "));
console.log("• join() - Noms séparés par des virgules:", premiersNoms.join(", "));

// toString() - Convertit en chaîne (équivalent à join(','))
console.log("• toString() - Premiers poids:", olympians.slice(0, 3).map(o => o.weight).toString());
console.log();

// ===== MÉTHODES DE CONCATÉNATION =====

console.log("--- MÉTHODES DE CONCATÉNATION ---");

// concat() - Joint des tableaux
const athletes = olympians.filter(o => o.sport === "athletics").slice(0, 2);
const swimmers = olympians.filter(o => o.sport === "swimming").slice(0, 2);
const melange = [...athletes, ...swimmers];
console.log("• concat() - Mélange Athlétisme + Natation:");
melange.forEach(o => console.log(`  ${o.sport} - ${o.name}`));
console.log();

// ===== MÉTHODES D'APLATISSEMENT =====

console.log("--- MÉTHODES D'APLATISSEMENT ---");

// flat() - Aplatit les tableaux imbriqués
const groupesParNationalite = [
    olympians.filter(o => o.nationality === "USA").slice(0, 2).map(o => o.name),
    olympians.filter(o => o.nationality === "FRA").slice(0, 2).map(o => o.name),
    olympians.filter(o => o.nationality === "GBR").slice(0, 2).map(o => o.name)
];
console.log("• flat() - Groupes par nationalité avant aplatissement:", groupesParNationalite);
console.log("• flat() - Après aplatissement:", groupesParNationalite.flat());
console.log();

// ===== STATISTIQUES FINALES =====

console.log("--- STATISTIQUES FINALES ---");

// Calculs statistiques utilisant différentes méthodes
const poids = olympians.map(o => o.weight).filter(w => w != null);
const poidsTotalCalc = poids.reduce((sum, weight) => sum + weight, 0);
const poidsMoyen = poidsTotalCalc / poids.length;
const poidsMin = Math.min(...poids);
const poidsMax = Math.max(...poids);

console.log("• Statistiques des poids:");
console.log(`  - Poids moyen: ${poidsMoyen.toFixed(1)}kg`);
console.log(`  - Poids minimal: ${poidsMin}kg`);
console.log(`  - Poids maximal: ${poidsMax}kg`);

// Répartition par nationalité
const repartitionNationalites = olympians.reduce((acc, o) => {
    acc[o.nationality] = (acc[o.nationality] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log("• Répartition par nationalité:", repartitionNationalites);

// Répartition par sexe
const repartitionSexe = olympians.reduce((acc, o) => {
    if (o.sex != null) {
        acc[o.sex] = (acc[o.sex] || 0) + 1;
    }
    return acc;
}, {} as Record<string, number>);
console.log("• Répartition par sexe:", repartitionSexe);

// =============================================
// GROUPEMENT DES DONNÉES AVEC Object.groupBy
// =============================================

console.log("\n--- GROUPEMENT AVEC Object.groupBy ---");

// Groupement par nationalité
console.log("• Object.groupBy() - Répartition par nationalité:");
const olympiensParNationalite = Object.groupBy(olympians, o => o.nationality);
for (const [nationalite, olympiens] of Object.entries(olympiensParNationalite)) {
    console.log(`  ${nationalite}: ${olympiens?.length || 0} olympiens`);
}


// Groupement par sport et sexe combinés
console.log("\n• Object.groupBy() - Répartition par sport et sexe:");
const olympiensParSportEtSexe = Object.groupBy(olympians, olympien =>
    `${olympien.sport} - ${olympien.sex || 'inconnu'}`
);

// Groupement par sexe
console.log("\n• Object.groupBy() - Répartition par sexe:");
const olympiensParSexe = Object.groupBy(olympians, olympien => olympien.sex || 'inconnu');
for (const [sexe, olympiens] of Object.entries(olympiensParSexe)) {
    console.log(`  ${sexe}: ${olympiens?.length || 0} olympiens`);
}

// Groupement par catégorie de poids (léger, moyen, lourd)
console.log("\n• Object.groupBy() - Répartition par catégorie de poids:");
const olympiensParCategoriePoids = Object.groupBy(olympians, olympien => {
    if (!olympien.weight) return 'poids inconnu';
    if (olympien.weight < 60) return 'léger';
    if (olympien.weight < 80) return 'moyen';
    return 'lourd';
});

Object.entries(olympiensParCategoriePoids)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([categorie, olympiens]) => {
        console.log(`  ${categorie}: ${olympiens?.length || 0} olympiens`);
    });

console.log("\n=== FIN DES EXEMPLES ===");

/* TODO Faire de même pour d'autres dataset : https://observablehq.com/@observablehq/sample-datasets (Possible d'utiliser COPILOT */
