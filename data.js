const EPISODES = [
  {
    "id": 1,
    "hc": "HC340",
    "title": "Tartessos",
    "period": "Antigüedad",
    "era": "Edad del Bronce-Hierro",
    "priority": 3,
    "topic": "Tartessos",
    "type": "Civilización",
    "summary": "Introducción a Tartessos, su contexto en el suroeste peninsular y su papel entre mito, arqueología y primeras culturas históricas de la península ibérica.",
    "people": [
      "Argantonio"
    ],
    "places": [
      "Suroeste peninsular",
      "Guadalquivir"
    ],
    "battles": [],
    "related": [
      "HC46"
    ]
  },
  {
    "id": 2,
    "hc": "HC329",
    "title": "Esparta",
    "period": "Grecia",
    "era": "Grecia clásica",
    "priority": 3,
    "topic": "Esparta",
    "type": "Civilización",
    "summary": "Recorrido por la sociedad espartana, su sistema militar, su educación, su estructura política y su papel dentro del mundo griego.",
    "people": [
      "Leónidas",
      "Licurgo"
    ],
    "places": [
      "Esparta",
      "Laconia",
      "Termópilas"
    ],
    "battles": [
      "Termópilas"
    ],
    "related": [
      "HC38"
    ]
  },
  {
    "id": 3,
    "hc": "HC38",
    "title": "Alejandro y Afganistán",
    "period": "Grecia/Macedonia",
    "era": "Alejandro Magno",
    "priority": 2,
    "topic": "Alejandro Magno",
    "type": "Personaje",
    "summary": "Episodio sobre la campaña oriental de Alejandro Magno y las dificultades de dominar territorios complejos como Bactria y zonas del actual Afganistán.",
    "people": [
      "Alejandro Magno"
    ],
    "places": [
      "Bactria",
      "Afganistán",
      "Imperio persa"
    ],
    "battles": [],
    "related": [
      "HC329"
    ]
  },
  {
    "id": 4,
    "hc": "HC15",
    "title": "Amílcar Barca, el León de Cartago",
    "period": "Cartago/Roma",
    "era": "Guerras Púnicas",
    "priority": 3,
    "topic": "Cartago",
    "type": "Personaje",
    "summary": "La figura de Amílcar Barca, la recuperación cartaginesa tras la Primera Guerra Púnica y la base de la futura expansión bárquida en Hispania.",
    "people": [
      "Amílcar Barca",
      "Aníbal Barca"
    ],
    "places": [
      "Cartago",
      "Hispania"
    ],
    "battles": [],
    "related": [
      "HC54"
    ]
  },
  {
    "id": 5,
    "hc": "HC54",
    "title": "Aníbal Barca y la II Guerra Púnica",
    "period": "Cartago/Roma",
    "era": "Guerras Púnicas",
    "priority": 3,
    "topic": "Aníbal Barca",
    "type": "Personaje",
    "summary": "Uno de los grandes episodios de historia militar antigua: Aníbal, el cruce de los Alpes, la guerra contra Roma y el duelo estratégico con Escipión.",
    "people": [
      "Aníbal Barca",
      "Escipión el Africano",
      "Amílcar Barca"
    ],
    "places": [
      "Cartago",
      "Roma",
      "Italia",
      "Hispania"
    ],
    "battles": [
      "Trebia",
      "Trasimeno",
      "Cannas",
      "Zama"
    ],
    "related": [
      "HC15",
      "HC59"
    ]
  },
  {
    "id": 6,
    "hc": "HC46",
    "title": "Numancia",
    "period": "Hispania/Roma",
    "era": "Hispania prerromana",
    "priority": 2,
    "topic": "Numancia",
    "type": "Batalla",
    "summary": "La resistencia de Numancia frente a Roma y su conversión posterior en símbolo histórico de resistencia en la península ibérica.",
    "people": [
      "Escipión Emiliano"
    ],
    "places": [
      "Numancia",
      "Hispania"
    ],
    "battles": [
      "Sitio de Numancia"
    ],
    "related": [
      "HC340",
      "HC59"
    ]
  },
  {
    "id": 7,
    "hc": "HC59",
    "title": "César y la Guerra de las Galias",
    "period": "Roma",
    "era": "Final República romana",
    "priority": 3,
    "topic": "Julio César",
    "type": "Personaje",
    "summary": "La campaña de Julio César en la Galia, su ascenso político-militar y el proceso que prepara la crisis final de la República romana.",
    "people": [
      "Julio César",
      "Vercingétorix"
    ],
    "places": [
      "Galia",
      "Roma",
      "Alesia"
    ],
    "battles": [
      "Alesia"
    ],
    "related": [
      "HC54",
      "HC78"
    ]
  },
  {
    "id": 8,
    "hc": "HC78",
    "title": "César Augusto",
    "period": "Roma",
    "era": "Inicio Imperio romano",
    "priority": 3,
    "topic": "Augusto",
    "type": "Personaje",
    "summary": "La transformación del mundo romano tras las guerras civiles y la construcción del Principado bajo Augusto.",
    "people": [
      "Augusto",
      "Julio César",
      "Marco Antonio"
    ],
    "places": [
      "Roma",
      "Egipto"
    ],
    "battles": [
      "Accio"
    ],
    "related": [
      "HC59",
      "HC299"
    ]
  },
  {
    "id": 9,
    "hc": "HC299",
    "title": "Teutoburgo",
    "period": "Roma",
    "era": "Imperio romano",
    "priority": 3,
    "topic": "Teutoburgo",
    "type": "Batalla",
    "summary": "La derrota romana en el bosque de Teutoburgo y sus consecuencias para la expansión imperial más allá del Rin.",
    "people": [
      "Arminio",
      "Varo",
      "Augusto"
    ],
    "places": [
      "Germania",
      "Rin"
    ],
    "battles": [
      "Teutoburgo"
    ],
    "related": [
      "HC78"
    ]
  },
  {
    "id": 10,
    "hc": "HC12",
    "title": "De los Visigodos a Covadonga",
    "period": "Edad Media",
    "era": "Inicio Reconquista",
    "priority": 3,
    "topic": "Reconquista",
    "type": "Periodo",
    "summary": "Transición desde el reino visigodo a los primeros núcleos de resistencia cristiana tras la conquista islámica de la península.",
    "people": [
      "Don Pelayo"
    ],
    "places": [
      "Toledo",
      "Covadonga",
      "Asturias"
    ],
    "battles": [
      "Covadonga"
    ],
    "related": [
      "HC24"
    ]
  },
  {
    "id": 11,
    "hc": "HC58",
    "title": "Vikingos y mitología nórdica",
    "period": "Edad Media",
    "era": "Alta Edad Media",
    "priority": 3,
    "topic": "Vikingos",
    "type": "Civilización",
    "summary": "Visión general del mundo vikingo, sus incursiones, cultura marítima, religión y mitología nórdica.",
    "people": [
      "Odín",
      "Thor"
    ],
    "places": [
      "Escandinavia",
      "Inglaterra",
      "Atlántico norte"
    ],
    "battles": [],
    "related": []
  },
  {
    "id": 12,
    "hc": "HC24",
    "title": "Batalla de las Navas de Tolosa",
    "period": "Edad Media",
    "era": "Reconquista",
    "priority": 3,
    "topic": "Navas de Tolosa",
    "type": "Batalla",
    "summary": "La batalla de 1212 y su impacto en el equilibrio militar y político de la península durante la Reconquista.",
    "people": [
      "Alfonso VIII",
      "Muhammad an-Nasir"
    ],
    "places": [
      "Las Navas de Tolosa",
      "Castilla",
      "Al-Ándalus"
    ],
    "battles": [
      "Navas de Tolosa"
    ],
    "related": [
      "HC12"
    ]
  },
  {
    "id": 13,
    "hc": "HC10",
    "title": "La conquista de México",
    "period": "Edad Moderna",
    "era": "Conquista de América",
    "priority": 3,
    "topic": "Conquista de México",
    "type": "Conquista",
    "summary": "La conquista de México, el choque entre el mundo mexica y los españoles, y la compleja red de alianzas indígenas que hizo posible la caída de Tenochtitlan.",
    "people": [
      "Hernán Cortés",
      "Moctezuma II"
    ],
    "places": [
      "Tenochtitlan",
      "México"
    ],
    "battles": [
      "Tenochtitlan"
    ],
    "related": []
  },
  {
    "id": 14,
    "hc": "HC20",
    "title": "Tercios de Flandes",
    "period": "Edad Moderna",
    "era": "Imperio español",
    "priority": 3,
    "topic": "Tercios",
    "type": "Militar",
    "summary": "Los tercios españoles, su organización, táctica y papel en la hegemonía militar hispánica en Europa.",
    "people": [
      "Alejandro Farnesio"
    ],
    "places": [
      "Flandes",
      "Países Bajos"
    ],
    "battles": [],
    "related": [
      "HC57"
    ]
  },
  {
    "id": 15,
    "hc": "HC57",
    "title": "Blas de Lezo y Olavarrieta",
    "period": "Edad Moderna",
    "era": "Siglo XVIII",
    "priority": 3,
    "topic": "Blas de Lezo",
    "type": "Personaje",
    "summary": "Biografía militar de Blas de Lezo y defensa de Cartagena de Indias frente al ataque británico.",
    "people": [
      "Blas de Lezo",
      "Edward Vernon"
    ],
    "places": [
      "Cartagena de Indias"
    ],
    "battles": [
      "Cartagena de Indias"
    ],
    "related": [
      "HC20"
    ]
  },
  {
    "id": 16,
    "hc": "HC25",
    "title": "Independencia de Estados Unidos",
    "period": "Revoluciones",
    "era": "Revoluciones atlánticas",
    "priority": 3,
    "topic": "Independencia de EE. UU.",
    "type": "Revolución",
    "summary": "La independencia estadounidense dentro del contexto atlántico, las Trece Colonias y el conflicto con Gran Bretaña.",
    "people": [
      "George Washington"
    ],
    "places": [
      "Estados Unidos",
      "Gran Bretaña"
    ],
    "battles": [
      "Yorktown"
    ],
    "related": []
  },
  {
    "id": 17,
    "hc": "HC95",
    "title": "Batalla de Waterloo",
    "period": "Napoleón",
    "era": "Guerras napoleónicas",
    "priority": 3,
    "topic": "Waterloo",
    "type": "Batalla",
    "summary": "El desenlace militar y político de Napoleón en Waterloo y el cierre de una era para Europa.",
    "people": [
      "Napoleón Bonaparte",
      "Wellington",
      "Blücher"
    ],
    "places": [
      "Waterloo",
      "Bélgica"
    ],
    "battles": [
      "Waterloo"
    ],
    "related": []
  },
  {
    "id": 18,
    "hc": "HC49",
    "title": "Guerra de Secesión Americana",
    "period": "Siglo XIX",
    "era": "Estados Unidos siglo XIX",
    "priority": 3,
    "topic": "Guerra de Secesión",
    "type": "Guerra",
    "summary": "La Guerra Civil estadounidense, sus causas políticas, económicas y sociales, y su impacto en la construcción moderna de Estados Unidos.",
    "people": [
      "Abraham Lincoln",
      "Robert E. Lee",
      "Ulysses S. Grant"
    ],
    "places": [
      "Estados Unidos"
    ],
    "battles": [
      "Gettysburg"
    ],
    "related": []
  },
  {
    "id": 19,
    "hc": "HC60",
    "title": "IGM: Imperialismo, alianzas y planes de guerra",
    "period": "Primera Guerra Mundial",
    "era": "1914-1918",
    "priority": 3,
    "topic": "Primera Guerra Mundial",
    "type": "Guerra",
    "summary": "Antecedentes de la Primera Guerra Mundial: imperialismo, bloques de alianzas, planes militares y tensiones previas a 1914.",
    "people": [
      "Guillermo II",
      "Francisco Fernando"
    ],
    "places": [
      "Europa"
    ],
    "battles": [],
    "related": [
      "HC64",
      "HC304",
      "HC306"
    ]
  },
  {
    "id": 20,
    "hc": "HC64",
    "title": "IGM: Guerra naval",
    "period": "Primera Guerra Mundial",
    "era": "1914-1918",
    "priority": 3,
    "topic": "Primera Guerra Mundial",
    "type": "Guerra",
    "summary": "La dimensión naval de la Primera Guerra Mundial: flotas, bloqueo, submarinos y la lucha por el control marítimo.",
    "people": [],
    "places": [
      "Atlántico",
      "Mar del Norte"
    ],
    "battles": [
      "Jutlandia"
    ],
    "related": [
      "HC60",
      "HC304",
      "HC306"
    ]
  },
  {
    "id": 21,
    "hc": "HC304",
    "title": "IGM: Occidente y la guerra en Europa 1914-16",
    "period": "Primera Guerra Mundial",
    "era": "1914-1918",
    "priority": 3,
    "topic": "Primera Guerra Mundial",
    "type": "Guerra",
    "summary": "La guerra en el frente occidental durante la primera mitad del conflicto, con el paso de la guerra de movimiento a la guerra de trincheras.",
    "people": [],
    "places": [
      "Francia",
      "Bélgica"
    ],
    "battles": [
      "Marne",
      "Verdún",
      "Somme"
    ],
    "related": [
      "HC60",
      "HC64",
      "HC306"
    ]
  },
  {
    "id": 22,
    "hc": "HC306",
    "title": "IGM: Occidente y la guerra en Europa 1917-18",
    "period": "Primera Guerra Mundial",
    "era": "1914-1918",
    "priority": 3,
    "topic": "Primera Guerra Mundial",
    "type": "Guerra",
    "summary": "La fase final de la guerra en Europa occidental: desgaste, entrada estadounidense, ofensivas alemanas y colapso final.",
    "people": [],
    "places": [
      "Francia",
      "Bélgica"
    ],
    "battles": [
      "Ofensiva de primavera",
      "Amiens"
    ],
    "related": [
      "HC60",
      "HC64",
      "HC304"
    ]
  },
  {
    "id": 23,
    "hc": "HC40",
    "title": "Pearl Harbor",
    "period": "Segunda Guerra Mundial",
    "era": "Pacífico",
    "priority": 3,
    "topic": "Pearl Harbor",
    "type": "Batalla",
    "summary": "El ataque japonés a Pearl Harbor y la entrada de Estados Unidos en la Segunda Guerra Mundial.",
    "people": [
      "Franklin D. Roosevelt",
      "Yamamoto"
    ],
    "places": [
      "Pearl Harbor",
      "Hawái",
      "Japón"
    ],
    "battles": [
      "Pearl Harbor"
    ],
    "related": [
      "HC194"
    ]
  },
  {
    "id": 24,
    "hc": "HC52",
    "title": "1940: La defensa de Francia",
    "period": "Segunda Guerra Mundial",
    "era": "Europa occidental",
    "priority": 3,
    "topic": "Francia 1940",
    "type": "Campaña",
    "summary": "La campaña alemana de 1940 en el oeste europeo y la rápida caída de Francia.",
    "people": [
      "Hitler",
      "Guderian",
      "De Gaulle"
    ],
    "places": [
      "Francia",
      "Bélgica"
    ],
    "battles": [
      "Sedán",
      "Dunkerque"
    ],
    "related": [
      "HC18"
    ]
  },
  {
    "id": 25,
    "hc": "HC14",
    "title": "Kursk",
    "period": "Segunda Guerra Mundial",
    "era": "Frente oriental",
    "priority": 3,
    "topic": "Kursk",
    "type": "Batalla",
    "summary": "La batalla de Kursk, uno de los grandes choques blindados del frente oriental y punto clave en la pérdida de iniciativa alemana.",
    "people": [
      "Zhukov",
      "Manstein"
    ],
    "places": [
      "Kursk",
      "URSS"
    ],
    "battles": [
      "Kursk"
    ],
    "related": []
  },
  {
    "id": 26,
    "hc": "HC18",
    "title": "El día D y la hora H",
    "period": "Segunda Guerra Mundial",
    "era": "Normandía",
    "priority": 3,
    "topic": "Día D",
    "type": "Batalla",
    "summary": "El desembarco aliado en Normandía y la apertura del frente occidental contra la Alemania nazi.",
    "people": [
      "Eisenhower",
      "Rommel"
    ],
    "places": [
      "Normandía",
      "Francia"
    ],
    "battles": [
      "Día D",
      "Normandía"
    ],
    "related": [
      "HC52"
    ]
  },
  {
    "id": 27,
    "hc": "HC194",
    "title": "Batalla de Midway",
    "period": "Segunda Guerra Mundial",
    "era": "Pacífico",
    "priority": 3,
    "topic": "Midway",
    "type": "Batalla",
    "summary": "Midway como punto de inflexión en la guerra del Pacífico entre Estados Unidos y Japón.",
    "people": [
      "Nimitz",
      "Yamamoto"
    ],
    "places": [
      "Midway",
      "Pacífico"
    ],
    "battles": [
      "Midway"
    ],
    "related": [
      "HC40"
    ]
  },
  {
    "id": 28,
    "hc": "HC50",
    "title": "Telón de Acero",
    "period": "Guerra Fría",
    "era": "Posguerra",
    "priority": 3,
    "topic": "Guerra Fría",
    "type": "Periodo",
    "summary": "Nacimiento de la Guerra Fría y división política e ideológica de Europa tras la Segunda Guerra Mundial.",
    "people": [
      "Churchill",
      "Stalin",
      "Truman"
    ],
    "places": [
      "Europa",
      "URSS",
      "Estados Unidos"
    ],
    "battles": [],
    "related": [
      "HC26"
    ]
  },
  {
    "id": 29,
    "hc": "HC26",
    "title": "La carrera espacial",
    "period": "Guerra Fría",
    "era": "Competencia espacial",
    "priority": 3,
    "topic": "Carrera espacial",
    "type": "Tecnología",
    "summary": "Competencia tecnológica y propagandística entre Estados Unidos y la URSS por el dominio del espacio.",
    "people": [
      "Yuri Gagarin",
      "Neil Armstrong"
    ],
    "places": [
      "Estados Unidos",
      "URSS",
      "Luna"
    ],
    "battles": [],
    "related": [
      "HC50"
    ]
  },
  {
    "id": 30,
    "hc": "HC37",
    "title": "Operación Tormenta del Desierto",
    "period": "Contemporánea",
    "era": "Guerra del Golfo",
    "priority": 2,
    "topic": "Guerra del Golfo",
    "type": "Guerra",
    "summary": "La guerra del Golfo de 1991, la coalición internacional y la operación militar contra Irak tras la invasión de Kuwait.",
    "people": [
      "Saddam Hussein",
      "George H. W. Bush"
    ],
    "places": [
      "Irak",
      "Kuwait"
    ],
    "battles": [
      "Tormenta del Desierto"
    ],
    "related": []
  }
];