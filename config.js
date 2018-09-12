
var MIN_SOLARSYSTEM_COUNT = 4;
var MAX_SOLARSYSTEM_COUNT = 12;

var MIN_PLANETS_PER_SOLARSYSTEM = 3;
var MAX_PLANETS_PER_SOLARSYSTEM = 8;

var PLANET_GRAPHIC_SIZE = 64;
var SOLARSYSTEM_GRAPHIC_SIZE = 18;

var PRIMARYCOLOR = {
 R : 0,
 G : 112,
 B : 0
};

var SECONDARYCOLOR = {
 R : 255,
 G : 255,
 B : 255
};

var FONTSIZE = {
 LARGE : 18,
 NORMAL : 12,
 SMALL : 9
};

var DISPLAY = {
 width : function() { return 800; },
 height : function() { return 600; },
 border : function() { return 3; },
 header : function() { return (FONTSIZE.LARGE + (DISPLAY.border() * 2)); },

 screenWidth : function() {
  return ((DISPLAY.border() * 2) + DISPLAY.width());
 },
 screenHeight : function() {
  return (((DISPLAY.border() * 2) + DISPLAY.header() + DISPLAY.height()));
 },
 x : function() {
  return DISPLAY.border();
 },
 y: function() {
  return DISPLAY.header() + DISPLAY.border();
 }
};

var PLANET_TYPE = {
 INVALID: -1,
 GAS: 0,
 RADIOACTIVE: 1,
 TOXIC: 2,
 BARREN: 3,
 ROCKY: 4,
 ORGANIC: 5,
 VEGETATIVE: 6
};

//This array corresponds to the planets.png file;
//each value annotates the PLANET_TYPE for that
//particular sprite image

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




