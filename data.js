var SYSTEM_NAMES = [
 "Andari", "Vega", "Regulus", "Baal", "Nexil", "Pegasus",
 "Undi", "Denagu", "Indius", "Yegobah", "Quistanna",
 "Gregoria", "Augusta", "Chali", "Sedna", "Telli", "Hubble",
 "Zulu", "Ceres", "Media", "Dosi", "Capella", "Sirius",
 "Aldebaran", "Eridanus", "Sagittarius", "Lyra", "Solymus",
 "Peleus", "Zagreus", "Hemithea", "Orelia", "Sagitta", 
 "Bodea", "Ferrite", "Canis", "Gallius", "Juno", "Kerby",
 "Kilios", "Lima", "Pavo", "Mollaia", "Nuva", "Optimus",
 "Sierra", "Tuva", "Torenno", "Univa", "Valadosus", "Wu",
 "Xavier", "Yoni", "Zel"
];

function getRandomSystemName() {
 if (SYSTEM_NAMES.length == 0) return "SYSTEM_NAMES EMPTY";
 var r = Math.floor(random(SYSTEM_NAMES.length));
 var systemName = SYSTEM_NAMES[r];
 SYSTEM_NAMES.splice(r, 1);
 return systemName;
}

var PLANET_NAMES = [
 "Aiur", "Zerus", "Tarsonis", "Mar Sara", "Char", "Umoja",
 "Korhal", "Abaddon", "Adena", "Agria", "Alamar", "Albion",
 "Aleun", "Alpha Draconis", "Altara", "Altheon", "Antiga Prime",
 "Atrias", "Bel'Shir", "Braxis", "Borea", "Brontes", "Boone", "Calus",
 "Candore", "Cantar", "Chiron", "Cirion", "Dannuth", "Dylar", 
 "Elderstine", "Exgelia", "Feronis", "Formicia", "Gantris", "Garrax",
 "Gelgaris", "Gyst", "Halcyon", "Hydrax", "Helios", "Icarus", "Ignus",
 "Jotun", "Jarr", "Krydon", "Ketill", "Lakius", "Luria", "Mirmanar", "Moria",
 "Melkora", "Maltair", "Meinhoff", "Nelyth", "Norris", "Nidus", "Onuru", "Orna",
 "Paralta", "Phaeton", "Raydin", "Revan", "Revera", "Roxara", "Salust", 
 "Scoria", "Seti", "Shakuras", "Shi", "Sorona", "Tal Quirat", "Tashai",
 "Thyus", "Tiria", "Tyrador", "Undi", "Urona", "Vanass", "Vardona", 
 "Veridia Prime", "Vygoire", "Wotan", "Xil", "Ynoth", "Zenn", "Zhakul",
 "Alderaan", "Alondra", "Alpha Proxima", "Altair", "Andoria", "Bajor",
 "Barzan", "Brax", "Brindi", "Capella", "Castal", "Cardassia", "Ceti",
 "Delios", "Decos", "Deneb", "Doraf", "Terra Nova", "New Earth", "Eden",
 "Ekos", "Elas", "Endicor", "Farius", "Gaia", "Gallos", "Galorda", "Halii",
 "Hanoran", "Haakon", "Hurkos", "Ilari", "Isis", "Jaros", "Jupitori", "Kabrel",
 "Kaldra", "Kataan", "Kelvin", "Kelvas", "Kessik", "Khitomer", "Ledos",
 "Luria", "Lysia", "Magus", "Maga", "Malon", "Meridian", "Minnobia", "Nagor",
 "Nehru", "Nivoch", "Nyria", "Ogus", "Omicron", "Organia", "Orion",
 "Pandora", "Parada", "Pegos", "P'Jem", "Platonius", "Pollux", "Praxis",
 "Qo'nos", "Quinor", "Quarra", "Ramura", "Ranza", "Rator", "Risa", "Romulus",
 "Remus", "Sauria", "Sheva", "Talos", "Tamar", "Tarsus", "Terrellia", "Thasus",
 "Tholia", "Titan", "Titus", "Uxal", "Umoth", "Vulcan", "Vandor", "Velos",
 "Wadi", "Xindus", "Xerxes", "Xantoras", "Yadera", "Yridian", "Zadar",
 "Zeon", "Batuu", "Bespin", "Corellia", "Coruscant", "Dagobah", "Dantooine",
 "Endor", "Felucia", "Fondor", "Geonosis", "Hoth", "Ilum", "Jakku", "Jedha",
 "Kamino", "Kessel", "Kuat", "Lothal", "Mandalore", "Mon Cala", "Mustafar",
 "Mygeeto", "Naboo", "Nal Hutta", "Ord Mantell", "Polis Massa", "Sullust",
 "Tatooine", "Utapau", "Vandor", "Vadar", "Yavin"
];

function getRandomPlanetName() {
 if (PLANET_NAMES.length == 0) return "PLANET_NAMES EMPTY";
 var r= Math.floor(random(PLANET_NAMES.length));
 var planetName = PLANET_NAMES[r];
 PLANET_NAMES.splice(r, 1);
 return planetName;
}