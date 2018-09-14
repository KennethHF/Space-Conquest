
//Display includes the screen area and game map/grid drawing area
var DISPLAY = {
 width: function () { return 800; },
 height: function () { return 600; },
 border: function () { return 3; },
 header: function () { return (FONTSIZE.LARGE + (DISPLAY.border() * 2)); },

 screenWidth: function () {
  return ((DISPLAY.border() * 2) + DISPLAY.width());
 },
 screenHeight: function () {
  return (((DISPLAY.border() * 2) + DISPLAY.header() + DISPLAY.height()));
 },
 x: function () {
  return DISPLAY.border();
 },
 y: function () {
  return DISPLAY.header() + DISPLAY.border();
 }
};

var FONTSIZE = {
 LARGE: 18,
 NORMAL: 12,
 SMALL: 9
};

var LIMIT = {
 SOLAR_SYSTEM_COUNT_MAX : 12,
 SOLAR_SYSTEM_COUNT_MIN : 4,
 PLANET_COUNT_MAX : 8,
 PLANET_COUNT_MIN : 3,
 PLANET_GRAPHIC_SIZE : 64,
 SOLAR_SYSTEM_GRAPHIC_SIZE : 18

};

//Main game colors
var PRIMARYCOLOR = { R: 0, G: 112, B: 0 };
var SECONDARYCOLOR = { R: 255, G: 255, B: 255 };


//Graphics and Images
var imgGalaxy;
var imgPlanets;
var imgStar;
var imgFrame;
var imgArrow;
var imgClose;