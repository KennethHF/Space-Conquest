var MODIFIERS = {
 TROPOSPHERE: 0,
 BIOSPHERE: 1,
 CLIMATE: 2,
 ENVIRONMENT: 3,
 GEOLOGY: 4,
 ALBEDO: 5,
 ECOSYSTEM: 6,
 STRATOSPHERE: 7
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

var MODIFIER_VALUE = {
 BEST: function () { return random(1.3, 1.7); },
 BETTER: function () { return random(1.1, 1.5); },
 GOOD: function () { return random(0.9, 1.3); },
 AVERAGE: function () { return random(0.8, 1.2); },
 POOR: function () { return random(0.7, 1.1); },
 BAD: function () { return random(0.5, 0.9); },
 WORST: function () { return random(0.3, 0.7); },
 NONE: function () { return 0.0; }
};

function getModifierValueName(modValue) {
 var valName = "[UNKNOWN]";
 if (modValue >= 1.5) valName = "[HIGHEST QUALITY]";
 if (modValue > 1.2 && modValue < 1.5) valName = "[GOOD QUALITY]";
 if (modValue >= 0.8 && modValue <= 1.2) valName = "[AVERAGE QUALITY]";
 if (modValue > 0.5 && modValue < 0.8) valName = "[POOR QUALITY]";
 if (modValue <= 0.5) valName = "[LOWEST QUALITY]";
 return valName;
}

var MODIFIERS_GROUP = function () {
 this.troposphere = 0.0; //effects RESOURCES.CITIZENS
 this.biosphere = 0.0; //effects RESOURCES.FOOD
 this.climate = 0.0; //effects RESOURCES.CREDITS
 this.environment = 0.0; //effects RESOURCES.MATERIALS
 this.geology = 0.0; //effects RESOURCES.METALLICS
 this.albedo = 0.0; //effects RESOURCES.ISOTOPES
 this.ecosystem = 0.0; //effects RESOURCES.INNOVATION
 this.stratosphere = 0.0; //effects RESOURCES.FUELS
};