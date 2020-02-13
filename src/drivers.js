const drivers = [
  {
    id: 1,
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
    country: "United Kingdom",
    podiums: 151,
    points: 3431,
    grandPrix: 250,
    highestPol: 1
  },
  {
    id: 2,
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
    country: "Finland",
    podiums: 45,
    points: 1289,
    grandPrix: 140,
    highestPol: 1
    
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
    country: "Germany",
    podiums: 120,
    points: 2985,
    grandPrix: 241,
    highestPol: 1
  },
  {
    id: 4,
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
    country: "Monaco",
    podiums: 10 ,
    points: 303,
    grandPrix: 42,
    highestPol: 1
  },
  {
    id: 5,
    name: "Max Verstappen",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1920.medium.jpg/1554819019533.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/helmet.img.png/1552565541062.png",
    number: 33,
    team: "Red Bull Racing",
    yearsOld: {
      born: "1997-09-30",
      age: 22
    },
    country: "Netherlands",
    podiums: 31,
    points: 948,
    grandPrix: 102,
    highestPol: 1
  },
  {
    id: 6,
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
    country: "Thailand",
    podiums: "N/A",
    points: 92,
    grandPrix: 21,
    highestPol: 5
  },
  {
    id: 7,
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
    country: "Spain",
    podiums: 1,
    points: 267,
    grandPrix: 102,
    highestPol: 5
  },
  {
    id: 8,
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
    country: "United Kingdom",
    podiums: "N/A",
    points: 49,
    grandPrix: 21,
    highestPol: 5
  },
  {
    id: 9,
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
    id: 10,
    name: "Esteban Ocon",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/esteban-ocon/_jcr_content/image.img.1920.medium.jpg/1579790911718.jpg",
    helmet:
      "https://www.formula1.com/etc/designs/default/0.gif",
    number: 31,
    team: "Renault F1 Team",
    yearsOld: {
      born: "1996-09-17",
      age: 24
    },
    country: "France",
    podiums: "N/A",
    points: 136,
    grandPrix: 50,
    highestPol: 3
  },
  {
    id: 11,
    name: "Pierre Gasly",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1920.medium.jpg/1566295417688.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/helmet.img.png/1551351962002.png",
    number: 10,
    team: "AlphaTauri",
    yearsOld: {
      born: "1996-02-07",
      age: 23
    },
    country: "France",
    podiums: 1,
    points: 124,
    grandPrix: 47,
    highestPol: 4
  },
  {
    id: 12,
    name: "Daniil Kvyat",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/daniil-kvyat/_jcr_content/image.img.1920.medium.jpg/1554819075478.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/daniil-kvyat/_jcr_content/helmet.img.png/1552320746276.png",
    number: 26,
    team: "AlphaTauri",
    yearsOld: {
      born: "1994-04-26",
      age: 25
    },
    country: "Russian Federation",
    podiums: 3,
    points: 170,
    grandPrix: 95,
    highestPol: 4
  },
  {
    id: 13,
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
    country: "Mexico",
    podiums: 8,
    points: 581,
    grandPrix: 178,
    highestPol: 4
  },
  {
    id: 14,
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
    country: "Canada",
    podiums: 1,
    points: 67,
    grandPrix: 62,
    highestPol: 2
  },
  {
    id: 15,
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
    country: "Finland",
    podiums: 120,
    points: 2985,
    grandPrix: 241,
    highestPol: 1
  },
  {
    id: 16,
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
    country: "Italy",
    podiums: "N/A",
    points: 14,
    grandPrix: 23,
    highestPol: 7
  },
  {
    id: 17,
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
    country: "France",
    podiums: 10,
    points: 389,
    grandPrix: 166,
    highestPol: 2
  },
  {
    id: 18,
    name: "Kevin Magnussen",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/image.img.1920.medium.jpg/1568719901149.jpg",
    helmet:
      "https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/helmet.img.png/1551351958111.png",
    number: 20,
    team: "Haas F1 Team",
    yearsOld: {
      born: "1992-10-05",
      age: 28
    },
    country: "Denmark",
    podiums: 1,
    points: 157,
    grandPrix: 103,
    highestPol: 4
  },
  {
    id: 19,
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
    country: "United Kingdom",
    podiums: "N/A",
    points: 0,
    grandPrix: 21,
    highestPol: 14
  },
  {
    id: 20,
    name: "Nicholas Latifi",
    imgURL:
      "https://www.formula1.com/content/fom-website/en/drivers/nicholas-latifi/_jcr_content/image.img.1536.medium.jpg/1578580980422.jpg",
    helmet:
      "https://www.formula1.com/etc/designs/default/0.gif",
    number: 6,
    team: "Williams",
    yearsOld: {
      born: "1995-29-06",
      age: 25
    },
    country: "Canada",
    podiums: "N/A",
    points: 0,
    grandPrix: "N/A",
    highestPol: "N/A"
  },

];

export default drivers;
