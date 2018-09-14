var window = null;

function loadGraphics() {
 imgGalaxy = new Surface("graphics/galaxy.png");
 imgPlanets = new Surface("graphics/planets.png");
 imgFrame = new Surface("graphics/frame.png");
 imgStar = new Surface("graphics/star.png");
}

function init() {
 window = createCanvas(DISPLAY.screenWidth(), DISPLAY.screenHeight());
 imgGalaxy.resize(DISPLAY.width(), DISPLAY.height());
 imgGalaxy.move(DISPLAY.x(), DISPLAY.y());
 imgPlanets.defineTiles(128,128);
 imgPlanets.resize(64, 64);
 imgFrame.resize(DISPLAY.width() / 2, DISPLAY.height());
}

function newGame() {

}