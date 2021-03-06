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
 var r = Math.floor(random(PLANET_NAMES.length));
 var planetName = PLANET_NAMES[r];
 PLANET_NAMES.splice(r, 1);
 return planetName;
}

var PLANET_TYPES = {
 GAS: 0,
 RADIOACTIVE: 1,
 TOXIC: 2,
 BARREN: 3,
 ROCKY: 4,
 ORGANIC: 5,
 VEGETATIVE: 6
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

var PLANET_IMAGE_VALUE = [
 5, 2, 4, 2, 1, 0, 6, 3, 3, 1,
 4, 0, 2, 1, 5, 2, 6, 0, 4, 3,
 1, 5, 3, 2, 3, 0, 6, 5, 5, 1,
 1, 3, 4, 4, 2, 6, 2, 1, 3, 5,
 0, 5, 1, 4, 4, 2, 6, 0, 6, 0,
 0, 3, 4, 3, 6, 5, 6, 1, 3, 2,
 0, 1, 5, 2, 2, 1, 4, 1, 2, 3,
 5, 6, 3, 0, 6, 5, 0, 6, 2, 5,
 4, 5, 0, 0, 1, 6, 2, 3, 4, 3,
 6, 5, 1, 4, 4, 1, 6, 2, 3, 4,
 0, 0, 5, 4, 4, 6, 3, 6, 1, 2,
 0, 5, 6, 4, 1, 2, 3, 6, 3, 5,
 5, 6, 2, 0, 0, 5, 1, 1, 0, 2,
 4, 0, 0, 0, 4, 5, 3, 6, 1, 2,
 4, 5, 3, 1, 2, 3, 3, 4, 5, 6,
 6, 4, 0, 3, 2, 1, 0, 4, 3, 2,
 3, 0, 1, 4, 4, 2, 1, 6, 3, 4,
 4, 3, 5, 4, 3, 6, 6, 5, 3, 4,
 1, 3, 0, 5, 0, 6, 0, 6, 2, 5,
 1, 6, 2, 6, 4, 2, 3, 1, 2, 5
];

function getPlanetModifiers(planetTypeValue) {
 var m = new MODIFIERS_GROUP();
 switch (planetTypeValue) {
  case (PLANET_TYPE.GAS):
   m.troposphere = MODIFIER_VALUE.WORST();
   m.biosphere = MODIFIER_VALUE.WORST();
   m.climate = MODIFIER_VALUE.POOR();
   m.environment = MODIFIER_VALUE.NONE();
   m.geology = MODIFIER_VALUE.NONE();
   m.albedo = MODIFIER_VALUE.WORST();
   m.ecosystem = MODIFIER_VALUE.POOR();
   m.stratosphere = MODIFIER_VALUE.BEST();
   break;
  case (PLANET_TYPES.RADIOACTIVE):
   m.troposphere = MODIFIER_VALUE.BAD();
   m.biosphere = MODIFIER_VALUE.BAD();
   m.climate = MODIFIER_VALUE.POOR();
   m.environment = MODIFIER_VALUE.POOR();
   m.geology = MODIFIER_VALUE.BETTER();
   m.albedo = MODIFIER_VALUE.BEST();
   m.ecosystem = MODIFIER_VALUE.GOOD();
   m.stratosphere = MODIFIER_VALUE.BETTER();
   break;
  case (PLANET_TYPES.TOXIC):
   m.troposphere = MODIFIER_VALUE.POOR();
   m.biosphere = MODIFIER_VALUE.POOR();
   m.climate = MODIFIER_VALUE.POOR();
   m.environment = MODIFIER_VALUE.AVERAGE();
   m.geology = MODIFIER_VALUE.BEST();
   m.albedo = MODIFIER_VALUE.BETTER();
   m.ecosystem = MODIFIER_VALUE.BEST();
   m.stratosphere = MODIFIER_VALUE.GOOD();
   break;
  case (PLANET_TYPES.BARREN):
   m.troposphere = MODIFIER_VALUE.AVERAGE();
   m.biosphere = MODIFIER_VALUE.AVERAGE();
   m.climate = MODIFIER_VALUE.AVERAGE();
   m.environment = MODIFIER_VALUE.BETTER();
   m.geology = MODIFIER_VALUE.GOOD();
   m.albedo = MODIFIER_VALUE.GOOD();
   m.ecosystem = MODIFIER_VALUE.GOOD();
   m.stratosphere = MODIFIER_VALUE.AVERAGE();
   break;
  case (PLANET_TYPES.ROCKY):
   m.troposphere = MODIFIER_VALUE.GOOD();
   m.biosphere = MODIFIER_VALUE.GOOD();
   m.climate = MODIFIER_VALUE.GOOD();
   m.environment = MODIFIER_VALUE.BEST();
   m.geology = MODIFIER_VALUE.AVERAGE();
   m.albedo = MODIFIER_VALUE.POOR();
   m.ecosystem = MODIFIER_VALUE.AVERAGE();
   m.stratosphere = MODIFIER_VALUE.POOR();
   break;
  case (PLANET_TYPES.ORGANIC):
   m.troposphere = MODIFIER_VALUE.BEST();
   m.biosphere = MODIFIER_VALUE.BETTER();
   m.climate = MODIFIER_VALUE.BEST();
   m.environment = MODIFIER_VALUE.BETTER();
   m.geology = MODIFIER_VALUE.POOR();
   m.albedo = MODIFIER_VALUE.BAD(); r
   m.ecosystem = MODIFIER_VALUE.POOR();
   m.stratosphere = MODIFIER_VALUE.WORST();
   break;
  case (PLANET_TYPES.VEGETATIVE):
   m.troposphere = MODIFIER_VALUE.BETTER();
   m.biosphere = MODIFIER_VALUE.BEST();
   m.climate = MODIFIER_VALUE.BETTER();
   m.environment = MODIFIER_VALUE.GOOD();
   m.geology = MODIFIER_VALUE.POOR();
   m.albedo = MODIFIER_VALUE.WORST();
   m.ecosystem = MODIFIER_VALUE.POOR();
   m.stratosphere = MODIFIER_VALUE.BAD();
   break;
 }
 return m;
}

function getOrbitSlotCount(planetTypeValue, colonyLevel) {
 var slots = 0;
 if (isNaN(colonyLevel) || colonyLevel <= 0 || colonyLevel > 5) return 0;
 switch (planetTypeValue) {
  case (PLANET_TYPES.GAS):
   slots = 6;
   break;
  case (PLANET_TYPES.RADIOACTIVE):
  case (PLANET_TYPES.TOXIC):
   slots = 5;
   if (colonyLevel <= 2) slots = 3;
   if (colonyLevel == 3 || colonyLevel == 4) slots = 4;
   break;
  case (PLANET_TYPES.BARREN):
  case (PLANET_TYPES.ROCKY):
   slots = 4;
   if (colonyLevel <= 4) slots = 3;
   break;
  case (PLANET_TYPES.ORGANIC):
  case (PLANET_TYPES.VEGETATIVE):
   slots = 3;
   break;
 }
 return slots;
}

function getGroundSlotCount(planetTypeValue, colonyLevel) {
 var slots = 0;
 if (isNaN(colonyLevel) || colonyLevel <= 0 || colonyLevel > 5) return 0;
 switch (plnaetTypeValue) {
  case (PLANET_TYPES.GAS):
   slots = 0;
   break;
  case (PLANET_TYPES.RADIOACTIVE):
  case (PLANET_TYPES.TOXIC):
   slots = colonyLevel + 1;
   break;
  case (PLANET_TYPES.BARREN):
   slots = colonyLevel + 3;
   if (colonyLevel == 4) slots = 8;
   if (colonyLevel == 5) slots = 9;
   break;
  case (PLANET_TYPES.ROCKY):
   slots = colonyLevel * 3;
   if (colonyLevel == 1) slots = 5;
   if (colonyLevel == 2) slots = 7;
   break;
  case (PLANET_TYPES.ORGANIC):
  case (PLANET_TYPES.VEGETATIVE):
   slots = 3 + (colonyLevel * 3);
   break;
 }
 return slots;
}