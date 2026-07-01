const EPISODES = [
  {
    "id": 1,
    "hc": "HC340",
    "title": "Tartessos",
    "period": "Antigüedad",
    "era": "Edad del Bronce-Hierro",
    "priority": 3,
    "topic": "Tartessos",
    "type": "Civilización"
  },
  {
    "id": 2,
    "hc": "HC329",
    "title": "Esparta",
    "period": "Grecia",
    "era": "Grecia clásica",
    "priority": 3,
    "topic": "Esparta",
    "type": "Civilización"
  },
  {
    "id": 3,
    "hc": "HC38",
    "title": "Alejandro y Afganistán",
    "period": "Grecia/Macedonia",
    "era": "Alejandro Magno",
    "priority": 2,
    "topic": "Alejandro Magno",
    "type": "Personaje"
  },
  {
    "id": 4,
    "hc": "HC15",
    "title": "Amílcar Barca, el León de Cartago",
    "period": "Cartago/Roma",
    "era": "Guerras Púnicas",
    "priority": 3,
    "topic": "Cartago",
    "type": "Personaje"
  },
  {
    "id": 5,
    "hc": "HC54",
    "title": "Aníbal Barca y la II Guerra Púnica",
    "period": "Cartago/Roma",
    "era": "Guerras Púnicas",
    "priority": 3,
    "topic": "Aníbal Barca",
    "type": "Personaje"
  },
  {
    "id": 6,
    "hc": "HC46",
    "title": "Numancia",
    "period": "Hispania/Roma",
    "era": "Hispania prerromana",
    "priority": 2,
    "topic": "Numancia",
    "type": "Batalla"
  },
  {
    "id": 7,
    "hc": "HC59",
    "title": "César y la Guerra de las Galias",
    "period": "Roma",
    "era": "Final República romana",
    "priority": 3,
    "topic": "Julio César",
    "type": "Personaje"
  },
  {
    "id": 8,
    "hc": "HC78",
    "title": "César Augusto",
    "period": "Roma",
    "era": "Inicio Imperio romano",
    "priority": 3,
    "topic": "Augusto",
    "type": "Personaje"
  },
  {
    "id": 9,
    "hc": "HC299",
    "title": "Teutoburgo",
    "period": "Roma",
    "era": "Imperio romano",
    "priority": 3,
    "topic": "Teutoburgo",
    "type": "Batalla"
  },
  {
    "id": 10,
    "hc": "HC12",
    "title": "De los Visigodos a Covadonga",
    "period": "Edad Media",
    "era": "Inicio Reconquista",
    "priority": 3,
    "topic": "Reconquista",
    "type": "Periodo"
  },
  {
    "id": 11,
    "hc": "HC58",
    "title": "Vikingos y mitología nórdica",
    "period": "Edad Media",
    "era": "Alta Edad Media",
    "priority": 3,
    "topic": "Vikingos",
    "type": "Civilización"
  },
  {
    "id": 12,
    "hc": "HC24",
    "title": "Batalla de las Navas de Tolosa",
    "period": "Edad Media",
    "era": "Reconquista",
    "priority": 3,
    "topic": "Navas de Tolosa",
    "type": "Batalla"
  },
  {
    "id": 13,
    "hc": "HC10",
    "title": "La conquista de México",
    "period": "Edad Moderna",
    "era": "Conquista de América",
    "priority": 3,
    "topic": "Conquista de México",
    "type": "Conquista"
  },
  {
    "id": 14,
    "hc": "HC20",
    "title": "Tercios de Flandes",
    "period": "Edad Moderna",
    "era": "Imperio español",
    "priority": 3,
    "topic": "Tercios",
    "type": "Militar"
  },
  {
    "id": 15,
    "hc": "HC57",
    "title": "Blas de Lezo y Olavarrieta",
    "period": "Edad Moderna",
    "era": "Siglo XVIII",
    "priority": 3,
    "topic": "Blas de Lezo",
    "type": "Personaje"
  },
  {
    "id": 16,
    "hc": "HC25",
    "title": "Independencia de Estados Unidos",
    "period": "Revoluciones",
    "era": "Revoluciones atlánticas",
    "priority": 3,
    "topic": "Independencia de EE. UU.",
    "type": "Revolución"
  },
  {
    "id": 17,
    "hc": "HC95",
    "title": "Batalla de Waterloo",
    "period": "Napoleón",
    "era": "Guerras napoleónicas",
    "priority": 3,
    "topic": "Waterloo",
    "type": "Batalla"
  },
  {
    "id": 18,
    "hc": "HC49",
    "title": "Guerra de Secesión Americana",
    "period": "Siglo XIX",
    "era": "Estados Unidos siglo XIX",
    "priority": 3,
    "topic": "Guerra de Secesión",
    "type": "Guerra"
  },
  {
    "id": 19,
    "hc": "HC60",
    "title": "IGM: Imperialismo, alianzas y planes de guerra",
    "period": "Primera Guerra Mundial",
    "era": "1914-1918",
    "priority": 3,
    "topic": "Primera Guerra Mundial",
    "type": "Guerra"
  },
  {
    "id": 20,
    "hc": "HC64",
    "title": "IGM: Guerra naval",
    "period": "Primera Guerra Mundial",
    "era": "1914-1918",
    "priority": 3,
    "topic": "Primera Guerra Mundial",
    "type": "Guerra"
  },
  {
    "id": 21,
    "hc": "HC304",
    "title": "IGM: Occidente y la guerra en Europa 1914-16",
    "period": "Primera Guerra Mundial",
    "era": "1914-1918",
    "priority": 3,
    "topic": "Primera Guerra Mundial",
    "type": "Guerra"
  },
  {
    "id": 22,
    "hc": "HC306",
    "title": "IGM: Occidente y la guerra en Europa 1917-18",
    "period": "Primera Guerra Mundial",
    "era": "1914-1918",
    "priority": 3,
    "topic": "Primera Guerra Mundial",
    "type": "Guerra"
  },
  {
    "id": 23,
    "hc": "HC40",
    "title": "Pearl Harbor",
    "period": "Segunda Guerra Mundial",
    "era": "Pacífico",
    "priority": 3,
    "topic": "Pearl Harbor",
    "type": "Batalla"
  },
  {
    "id": 24,
    "hc": "HC52",
    "title": "1940: La defensa de Francia",
    "period": "Segunda Guerra Mundial",
    "era": "Europa occidental",
    "priority": 3,
    "topic": "Francia 1940",
    "type": "Campaña"
  },
  {
    "id": 25,
    "hc": "HC14",
    "title": "Kursk",
    "period": "Segunda Guerra Mundial",
    "era": "Frente oriental",
    "priority": 3,
    "topic": "Kursk",
    "type": "Batalla"
  },
  {
    "id": 26,
    "hc": "HC18",
    "title": "El día D y la hora H",
    "period": "Segunda Guerra Mundial",
    "era": "Normandía",
    "priority": 3,
    "topic": "Día D",
    "type": "Batalla"
  },
  {
    "id": 27,
    "hc": "HC194",
    "title": "Batalla de Midway",
    "period": "Segunda Guerra Mundial",
    "era": "Pacífico",
    "priority": 3,
    "topic": "Midway",
    "type": "Batalla"
  },
  {
    "id": 28,
    "hc": "HC50",
    "title": "Telón de Acero",
    "period": "Guerra Fría",
    "era": "Posguerra",
    "priority": 3,
    "topic": "Guerra Fría",
    "type": "Periodo"
  },
  {
    "id": 29,
    "hc": "HC26",
    "title": "La carrera espacial",
    "period": "Guerra Fría",
    "era": "Competencia espacial",
    "priority": 3,
    "topic": "Carrera espacial",
    "type": "Tecnología"
  },
  {
    "id": 30,
    "hc": "HC37",
    "title": "Operación Tormenta del Desierto",
    "period": "Contemporánea",
    "era": "Guerra del Golfo",
    "priority": 2,
    "topic": "Guerra del Golfo",
    "type": "Guerra"
  }
];