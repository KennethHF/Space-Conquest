var STRUCTURE_TYPES = {
 GROUND : 0,
 ORBITAL : 1
};

var STRUCTURE = function() {
 this.name = "Unknown Structure";
 this.type = STRUCTURE_TYPES.GROUND;
 this.limit = 0;
 this.level = 1;
 this.imgIndex = 0;
 this.cost = new RESOURCES_GROUP();
 this.upkeep = new RESOURCES_GROUP();
 this.buildTimeTotal = 0;
 this.buildTimeCurrent = 0;
 this.rewardResources = new RESOURCES_GROUP();
 this.rewardModifiers = new MODIFIERS_GROUP();
 this.levelUp = 1.5;
}

var ALL_STRUCTURES = [];

var struct = new STRUCTURE();
var rss = new RESOURCES_GROUP();
var mods = new MODIFIERS_GROUP();

struct.name = "Farm";
struct.type = STRUCTURE_TYPES.GROUND;
struct.limit = 0;
struct.level = 1;
struct.imgIndex = 0;
 rss.citizens = 0;
 rss.food = 0;
 rss.credits = 50;
 rss.materials = 0;
 rss.metallics = 0;
 rss.isotopes = 0;
 rss.innovation = 0;
 rss.fuels = 0;
struct.cost = rss;
 rss.credits = 2;
struct.upkeep = rss;
struct.buildTimeTotal = 10;
struct.buildTimeCurrent = 0;
 rss.credits = 0;
 rss.food = 8;
struct.rewardResources = rss;
/*
 this.cost = {
  population : 0,
  food : 0,
  goods : 500,
  lightmaterials : 100,
  heavymaterials : 0,
  isotopes : 0,
  fuels : 0,
  levelUpII : 1.5,
  levelUpIII : 3.0
 };

 this.upkeep = {
  population : 100,
  food : 0,
  goods : 0,
  lightmaterials : 0,
  heavymaterials : 0,
  isotopes : 0,
  fuels : 0,
  levelUpII : 1.0,
  levelUpIII : 1.0
 };

 this.produces = {
  population : 0,
  food : 2000,
  goods : 0,
  lightmaterials: 0,
  heavymaterials : 0,
  isotopes : 0,
  fuels : 0,
  levelUpII : 2.0,
  levelUpIII : 3.5
 }

var RESOURCES_GROUP = function () {
 this.citizens = 0;
 this.food = 0;
 this.credits = 0;
 this.materials = 0;
 this.metallics = 0;
 this.isotopoes = 0;
 this.innovation = 0;
 this.fuels = 0;
};

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
*/