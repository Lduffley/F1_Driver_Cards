const drivers = [
  {
    id: 1,
    name: "Daniel Ricciadro",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1920.medium.jpg/1554819092086.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/helmet.img.png/1552565540881.png",
    number: 3,
    team: "Renault F1 Team",
    yearsOld: {
      born: "1989-07-01",
      age: 30
    },
    country: "Australia",
    podiums: 29,
    points: 1040,
    grandPrix: 171,
    highestPol: 1
  },
  {
    id: 2,
    name: "Lando Norris",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/image.img.1920.medium.jpg/1567085899345.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/helmet.img.png/1567520464890.png",
    number: 4,
    team: "McLaren",
    yearsOld: {
      born: "1999-11-13",
      age: 20
    },
    country: "United Kingdom"
  },
  {
    id: 3,
    name: "Sebastian Vettel",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.1920.medium.jpg/1567175200601.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/helmet.img.png/1567176245338.png",
    number: 5,
    team: "Ferrari",
    yearsOld: {
      born: "1987-07-03",
      age: 32
    },
    country: "Germany"
  },
  {
    id: 4,
    name: "Kimi Raikkonen",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/kimi-raikkonen/_jcr_content/image.img.1920.medium.jpg/1554819054944.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/kimi-raikkonen/_jcr_content/helmet.img.png/1551352334990.png",
    number: 7,
    team: "Alfa Romeo",
    yearsOld: {
      born: "1979-10-17 ",
      age: 40
    },
    country: "Finland"
  },
  {
    id: 5,
    name: "Romain Grosjean",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/romain-grosjean/_jcr_content/image.img.1920.medium.jpg/1568719868304.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/romain-grosjean/_jcr_content/helmet.img.png/1551351963006.png",
    number: 8,
    team: "Haas F1 Team",
    yearsOld: {
      born: "1986-04-17",
      age: 33
    },
    country: "France"
  },
  {
    id: 6,
    name: "Pierre Gasly",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1920.medium.jpg/1566295417688.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/helmet.img.png/1551351962002.png",
    number: 10,
    team: "Toro Rosso",
    yearsOld: {
      born: "1996-02-07",
      age: 23
    },
    country: "France"
  },
  {
    id: 7,
    name: "Sergio Perez",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.1920.medium.jpg/1554818944774.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/helmet.img.png/1552565540424.png",
    number: 11,
    team: "Racing Point",
    yearsOld: {
      born: "1990-01-26",
      age: 29
    },
    country: "Mexico"
  },
  {
    id: 8,
    name: "Charles Leclerc",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1567179277948.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/helmet.img.png/1567176245008.png",
    number: 16,
    team: " Ferrari",
    yearsOld: {
      born: "1997-10-16",
      age: 22
    },
    country: "Monaco"
  },
  {
    id: 9,
    name: "Lance Stroll",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/image.img.1920.medium.jpg/1554818895505.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/helmet.img.png/1552565540999.png",
    number: 18,
    team: "Racing Point",
    yearsOld: {
      born: "1998-10-29",
      age: 21
    },
    country: "Canada"
  },
  {
    id: 10,
    name: "Kevin Magnussen",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/image.img.1920.medium.jpg/1568719901149.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/helmet.img.png/1551351958111.png",
    number: 20,
    team: "Haas F1 Team",
    yearsOld: {
      born: "1992-10-05",
      age: 27
    },
    country: "Denmark"
  },
  {
    id: 11,
    name: "Alex Albon",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/image.img.1920.medium.jpg/1566295320855.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/helmet.img.png/1552320745924.png",
    number: 23,
    team: "Red Bull Racing",
    yearsOld: {
      born: "1996-03-23",
      age: 23
    },
    country: "Thailand"
  },
  {
    id: 12,
    name: "Daniil Kvyat",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/daniil-kvyat/_jcr_content/image.img.1920.medium.jpg/1554819075478.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/daniil-kvyat/_jcr_content/helmet.img.png/1552320746276.png",
    number: 26,
    team: "Toro Rosso",
    yearsOld: {
      born: "1994-04-26",
      age: 25
    },
    country: "Russian Federation"
  },
  {
    id: 13,
    name: "Nico Hulkenberg",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/nico-hulkenberg/_jcr_content/image.img.1920.medium.jpg/1554818995713.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/nico-hulkenberg/_jcr_content/helmet.img.png/1551352334671.png",
    number: 27,
    team: "Renault F1 Team",
    yearsOld: {
      born: "1987-08-19",
      age: 32
    },
    country: "Germany"
  },
  {
    id: 14,
    name: "Max Verstappen",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1920.medium.jpg/1554819019533.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/helmet.img.png/1567520464890.png",
    number: 33,
    team: "Red Bull Racing",
    yearsOld: {
      born: "1997-09-30",
      age: 22
    },
    country: "Netherlands"
  },
  {
    id: 15,
    name: "Lewis Hamilton",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1920.medium.jpg/1554818913486.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/helmet.img.png/1551351963565.png",
    number: 44,
    team: "Mercedes",
    yearsOld: {
      born: "1985-01-07",
      age: 35
    },
    country: "United Kingdom"
  },
  {
    id: 16,
    name: "Carlos Sainz Jr.",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.1920.medium.jpg/1567085905449.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/helmet.img.png/1567520464991.png",
    number: 55,
    team: "McLaren",
    yearsOld: {
      born: "1994-09-01",
      age: 25
    },
    country: "Spain"
  },
  {
    id: 17,
    name: "George Russell",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/image.img.1920.medium.jpg/1554818804832.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/helmet.img.png/1551351959067.png",
    number: 63,
    team: "Williams",
    yearsOld: {
      born: "1998-02-15",
      age: 21
    },
    country: "United Kingdom"
  },
  {
    id: 18,
    name: "Valtteri Bottas",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1920.medium.jpg/1554818929157.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/helmet.img.png/1551351962160.png",
    number: 77,
    team: "Mercedes",
    yearsOld: {
      born: "1989-08-28",
      age: 30
    },
    country: "Finland"
  },
  {
    id: 19,
    name: "Robert Kubica",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/robert-kubica/_jcr_content/image.img.1920.medium.jpg/1554818824881.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/robert-kubica/_jcr_content/helmet.img.png/1551351964749.png",
    number: 88,
    team: "Williams",
    yearsOld: {
      born: "1984-12-07",
      age: 35
    },
    country: "Poland"
  },
  {
    id: 20,
    name: "Antonio Giovinazzi",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/antonio-giovinazzi/_jcr_content/image.img.1920.medium.jpg/1554818879413.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/antonio-giovinazzi/_jcr_content/helmet.img.png/1552552749988.png",
    number: 99,
    team: "Alfa Romeo",
    yearsOld: {
      born: "1993-12-14",
      age: 26
    },
    country: "Italy"
  }
];

export default drivers;
