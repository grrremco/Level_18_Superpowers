const superheroes = [
    {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
    },
    {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
    },
    {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
    },
    {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
    },
    {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
    },
    {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
    },
    {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
    },
    {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
    },
    {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
    },
    {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
    },
    {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
    },
    {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
    },
    {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
    },
    {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
    },
    {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
    }
    ]


//1

const superheroNames = superheroes.map(hero => {
    return hero.name;
});

console.log(superheroNames);
  

// 2 

const lightSuperheroes = superheroes.filter(hero => {
    return hero.weight < 190;
});

console.log(lightSuperheroes);
  

// 3 

const heavySuperheroes = superheroes
    .filter(hero => hero.weight == 200)
    .map(hero => hero.name);

console.log(heavySuperheroes);


//4

const firstAppearance = superheroes.map(hero => {
    return hero.first_appearance;
});

console.log("first appearance:", firstAppearance);


//5

const DCComics = superheroes.filter(hero => {
    return hero.publisher === "DC Comics";
})

const marvelComics = superheroes.filter(hero => {
    return hero.publisher === "Marvel Comics";
})

console.log("DC:", DCComics);
console.log("Marvel:", marvelComics);


//6

const superheroWeightsDC = DCComics.map(hero => {
    if (hero.weight !== "unknown") {
      return parseInt(hero.weight, 10);
    } else {
      return 0;
    }
});
  
const totalWeightDC = superheroWeightsDC.reduce((weight1, weight2) => {
    return weight1 + weight2;
});

console.log("Total weight of superheroes DC:", totalWeightDC);


//7

const superheroWeightsMarvel = marvelComics.map(hero => {
    if (hero.weight !== "unknown") {
      return parseInt(hero.weight, 10);
    } else {
      return 0;
    }
});
  
const totalWeightMarvel = superheroWeightsMarvel.reduce((weight1, weight2) => {
    return weight1 + weight2;
});

console.log("Total weight of superheroes Marvel:", totalWeightMarvel);


//8

const allSuperheroes = superheroes.map(hero => {
    const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
    hero.weight = weight;
    return hero;
});

const heavyWeightSuperhero = allSuperheroes.reduce((HeavierSuperhero, lighterSuperhero) => {
      if (lighterSuperhero.weight > HeavierSuperhero.weight) {
        return lighterSuperhero;
      } else {
        return HeavierSuperhero;
      }
    }, allSuperheroes[0]);
  
console.log("Heaviest superhero:", heavyWeightSuperhero.name,"| Weight:", heavyWeightSuperhero.weight);