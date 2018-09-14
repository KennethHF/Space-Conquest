var RESOURCES = {
 CITIZENS: 0,
 FOOD: 1,
 CREDITS: 2,
 MATERIALS: 3,
 METALLICS: 4,
 ISOTOPES: 5,
 INNOVATION: 6,
 FUELS: 7
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

RESOURCES_GROUP.prototype.reset = function() {
 this.citizens = 0;
 this.food = 0;
 this.credits = 0;
 this.materials = 0;
 this.metallics = 0;
 this.isotopes = 0;
 this.innovation = 0;
 this.fuels = 0;
}