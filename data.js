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

var PLANET_TYPES = {
 GAS : 0,
 RADIOACTIVE : 1,
 TOXIC : 2,
 BARREN : 3,
 ROCKY : 4,
 ORGANIC : 5,
 VEGETATIVE : 6
};

function getPlanetTypeName(planetTypeValue) {
 var typeName = "Unknown Planet";
 switch (planetTypeValue) {
  case (PLANET_TYPES.GAS): typeName = "Gas Planet"; break;
  case (PLANET_TYPES.RADIOACTIVE): typeName = "Radioactive Planet"; break;
  case (PLANET_TYPES.TOXIC): typeName = "Toxic Planet"; break;
  case (PLANET_TYPES.BARREN): typeName = "Barren Planet"; break;
  case (PLANET_TYPES.ROCKY): typeName = "Rocky Planet"; break;
  case (PLANET_TYPES.ORGANIC): typeName = "Organic Planet"; break;
  case (PLANET_TYPES.VEGETATIVE): typeName = "Vegetative Planet"; break;
 }
 return typeName;
}

var RESOURCES = {
 CITIZENS : 0,
 FOOD : 1,
 CREDITS : 2,
 MATERIALS : 3,
 METALLICS : 4,
 ISOTOPES : 5,
 INNOVATION : 6,
 FUELS : 7
};

function getResourceName(resourceIndex) {
 var rss = "Unknown Resource";
 switch (resourceIndex) {
  case (RESOURCES.CITIZENS): rss = "Citizens"; break;
  case (RESOURCES.FOOD): rss = "Food"; break;
  case (RESOURCES.CREDITS): rss = "Credits"; break;
  case (RESOURCES.MATERIALS): rss = "Materials"; break;
  case (RESOURCES.METALLICS): rss = "Metallics"; break;
  case (RESOURCES.ISOTOPES): rss = "Isotopes"; break;
  case (RESOURCES.INNOVATION): rss = "Innovation"; break;
  case (RESOURCES.FUELS): rss = "Fuels"; break;
 }
 return rss;
}

var RESOURCES_GROUP = function() {
 this.population = 0;
 this.food = 0;
 this.credits = 0;
 this.materials = 0;
 this.metallics = 0;
 this.isotopoes = 0;
 this.innovation = 0;
 this.fuels = 0;
};

var MODIFIERS = {
 TROPOSPHERE : 0,
 BIOSPHERE : 1,
 CLIMATE : 2,
 ENVIRONMENT : 3,
 GEOLOGY : 4,
 ALBEDO : 5,
 ECOSYSTEM : 6,
 STRATOSPHERE : 7
};

function getModifierName(modifierIndex) {
 var mod = "Unknown Modifier";
 switch (modifierIndex) {
  case (MODIFIERS.TROPOSPHERE):
   mod = "Troposphere - Effects the growth rate of the citizen population.";
   break;
  case (MODIFIERS.BIOSPHERE):
   mod = "Biosphere - Effects the quality of food yields.";
   break;
  case (MODIFIERS.CLIMATE):
   mod = "Climate - Effects the ability of citizens to conduct commerce, impacting credit generation.";
   break;
  case (MODIFIERS.ENVIRONMENT):
   mod = "Environment - Effects the output of materials.";
   break;
  case (MODIFIERS.GEOLOGY):
   mod = "Geology - Effects the output of metallics.";
   break;
  case (MODIFIERS.ALBEDO):
   mod = "Albedo - Effects from solar radiation impact isotope output.";
   break;
  case (MODIFIERS.ECOSYSTEM):
   mod = "Ecosystem - Effects research opportunities for scientists to generate innovation.";
   break;
  case (MODIFIERS.STRATOSPHERE):
   mod = "Stratosphere - Effects the output of fuels harvested from atmospheric gases.";
   break;
 }
 return mod;
}

var MODIFIER_GROUP = function() {
 this.troposphere = 0.0; //citizen increase
 this.biosphere = 0.0; //food
 this.climate = 0.0; //credits
 this.environment = 0.0; //materials
 this.geology = 0.0; //metallics
 this.albedo = 0.0; //isotopes
 this.ecosystem = 0.0; //innovation
 this.stratosphere = 0.0; //fuels
}

function getPlanetModifiers(planetTypeValue) {
 var m = new MODIFIER_GROUP();
 switch (planetTypeValue) {
  case (PLANET_TYPE.GAS):
   m.troposphere = random(0.3, 0.5);
   m.biosphere = random(0.5, 0.7);
   m.climate = random(0.1, 0.5);
   m.environment = random(0.1, 0.5);
   m.geology = random(0.0, 0.1);
   m.albedo = random(0.1, 0.3);
   m.ecosystem = random(0.2, 0.4);
   m.stratosphere = random(1.0, 1.5);
   break;
  case (PLANET_TYPES.RADIOACTIVE):
   break;
  case (PLANET_TYPES.TOXIC):
   break;
  case (PLANET_TYPES.BARREN):
   break;
  case (PLANET_TYPES.BARREN):
   break;
  case (PLANET_TYPES.ROCKY):
   break;
  case (PLANET_TYPES.ORGANIC):
   break;
  case (PLANET_TYPES.VEGETATIVE):
   break;
 }
 return m;
}
