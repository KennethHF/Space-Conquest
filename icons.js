//**************************************
//BUILDS AND DRAWS THE ICONS (sprIcons)
//**************************************


function drawIcon(iconID, x, y, optText, optDestObj) {
  if (x == null) x = 0;
  if (y == null) y = 0;
  sprIcons.move(x, y);
  sprIcons.index = iconID;

  if (optDestObj != null) {
    sprIcons.draw(optDestObj);
    optDestObj.push();
    optDestObj.textAlign(LEFT, TOP);
    optDestObj.textFont("Tahoma");
    optDestObj.textSize(12);
    if (optText != null) optDestObj.text(optText, x + ICON_SIZE + 2, y);
    optDestObj.pop();
  } else {
   sprIcons.draw();
   if (optText != null) {
    push();
      textFont("Tahoma");
      textAlign(LEFT, TOP);
      textSize(12);
      if (optText != null) text(optText, x + ICON_SIZE + 2, y);
    pop();
   }
  }
    
}


/* Icons Sprite consists of:

  Index
   0 - Energy Icon (16x16)
   1 - Metals Icon (16x16)
   2 - Ship Icon (16x16)
   3 - Food Icon (16x16)
   4 - Goods Icon (16x16)
   5 - Happiness Icon (16x16)
   6 - Population Icon (16x16)
   7 - Settings Icon (16x16)
   8 - Pause Icon (16x16)
   9 - Run Icon (16x16)
  10 - Research Icon (16x16)
  11 - X Close Icon (16x16)

*/

const ICON_COUNT = 12;
const ICON_SIZE = 16;

const ENERGY = 0;
const METALS = 1;
const SHIPS = 2;
const FOOD = 3;
const GOODS = 4;
const HAPPINESS = 5;
const POPULATION = 6;
const SETTINGS = 7;
const PAUSE = 8;
const RUN = 9;
const RESEARCH = 10;
const XCLOSE = 11;

let imgIcons = null;

function buildIcons() {
  imgIcons = new Graphic(ICON_SIZE * ICON_COUNT, ICON_SIZE);

  //ENERGY ICON
  let imgEnergy = new Graphic(24, 24);
  imgEnergy.noFill();
  imgEnergy.strokeWeight(2);
  imgEnergy.stroke(ENERGY_COLOR);
  imgEnergy.ellipse(imgEnergy.width/2, imgEnergy.height/2, 22, 22);
  imgEnergy.fill(ENERGY_COLOR);
  imgEnergy.noStroke();
  imgEnergy.beginShape();
    imgEnergy.vertex(12, 4);
    imgEnergy.vertex(4, 12);
    imgEnergy.vertex(20, 12);
    imgEnergy.vertex(12, 20);
  imgEnergy.endShape(CLOSE);
  imgIcons.image(imgEnergy, ICON_SIZE * ENERGY, 0, ICON_SIZE, ICON_SIZE);

  //METALS ICON
  let imgMetals = new Graphic(24, 24);
  imgMetals.noFill();
  imgMetals.strokeWeight(2);
  imgMetals.stroke(METALS_COLOR);
  imgMetals.ellipse(imgMetals.width/2, imgMetals.height/2, 22, 22);
  imgMetals.fill(METALS_COLOR);
  imgMetals.noStroke();
  push();
    imgMetals.rectMode(CENTER);
    imgMetals.translate(12, 12);
    imgMetals.rotate(radians(315));
    imgMetals.rect(-3, 0, 5, 12, 5);
    imgMetals.rect(3, 0, 5, 12, 5);
  pop();
  imgIcons.image(imgMetals, ICON_SIZE * METALS, 0, ICON_SIZE, ICON_SIZE);

  //SHIPS ICON
  let imgShip = new Graphic(24, 24);
  imgShip.noFill();
  imgShip.strokeWeight(2);
  imgShip.stroke(SHIPS_COLOR);
  imgShip.ellipse(imgShip.width/2, imgShip.height/2, 22, 22);
  imgShip.fill(SHIPS_COLOR);
  imgShip.noStroke();
  imgShip.beginShape();
    imgShip.vertex(12, 2);
    imgShip.vertex(7, 8);
    imgShip.vertex(7, 10);
    imgShip.vertex(10, 14);
    imgShip.vertex(10, 19);
    imgShip.vertex(12, 20);
    imgShip.vertex(14, 19);
    imgShip.vertex(14, 14);
    imgShip.vertex(17, 10);
    imgShip.vertex(17, 8);
    imgShip.vertex(12, 2);
  imgShip.endShape(CLOSE);
  imgShip.triangle(4, 14, 9, 14, 9, 21);
  imgShip.triangle(20, 14, 15, 14, 15, 21);
  imgShip.fill(Color.Black);
  imgShip.noStroke();
  imgShip.triangle(12, 6, 9, 8, 15, 8);
  imgIcons.image(imgShip, ICON_SIZE * SHIPS, 0, ICON_SIZE, ICON_SIZE);

  //FOOD ICON
  let imgFood = new Graphic(24, 24);
  imgFood.noFill();
  imgFood.strokeWeight(2);
  imgFood.stroke(FOOD_COLOR);
  imgFood.ellipse(imgFood.width/2, imgFood.height/2, 22, 22);
  imgFood.fill(FOOD_COLOR);
  imgFood.noStroke();
  imgFood.arc(12, 12, 16, 12, radians(105), radians(270));
  imgFood.arc(12, 12, 16, 12, radians(270), radians(75));
  imgFood.rect(10, 3, 4, 6, 3);
  imgIcons.image(imgFood, ICON_SIZE * FOOD, 0, ICON_SIZE, ICON_SIZE);

  //GOODS ICON
  let imgGoods = new Graphic(24, 24);
  imgGoods.noFill();
  imgGoods.strokeWeight(2);
  imgGoods.stroke(GOODS_COLOR);
  imgGoods.ellipse(imgGoods.width/2, imgGoods.height/2, 22, 22);
  imgGoods.fill(GOODS_COLOR);
  imgGoods.noStroke();
  imgGoods.ellipse(12, 8, 8, 8);
  imgGoods.ellipse(8, 12, 8, 8);
  imgGoods.ellipse(16, 12, 8, 8);
  imgGoods.stroke(GOODS_COLOR);
  imgGoods.line(8, 18, 16, 18);
  imgIcons.image(imgGoods, ICON_SIZE * GOODS, 0, ICON_SIZE, ICON_SIZE);

  //HAPPINESS ICON
  let imgHappy = new Graphic(24, 24);
  imgHappy.noFill();
  imgHappy.strokeWeight(2);
  imgHappy.stroke(HAPPINESS_COLOR);
  imgHappy.ellipse(imgHappy.width/2, imgHappy.height/2, 22, 22);
  imgHappy.fill(HAPPINESS_COLOR);
  imgHappy.noStroke();
  imgHappy.ellipse(12, 12, 16, 16);
  imgHappy.fill(Color.Black);
  imgHappy.ellipse(9, 9, 3, 3);
  imgHappy.ellipse(15, 9, 3, 3);
  imgHappy.noFill();
  imgHappy.stroke(Color.Black);
  imgHappy.arc(12, 12, 9, 9, radians(45), radians(135));
  imgIcons.image(imgHappy, ICON_SIZE * HAPPINESS, 0, ICON_SIZE, ICON_SIZE);

  //POPULATION ICON
  let imgPop = new Graphic(24, 24);
  imgPop.noFill();
  imgPop.strokeWeight(2);
  imgPop.stroke(POPULATION_COLOR);
  imgPop.ellipse(imgPop.width/2, imgPop.height/2, 22, 22);
  imgPop.fill(POPULATION_COLOR);
  imgPop.noStroke();
  imgPop.ellipse(12, 8, 8, 8);
  imgPop.triangle(12, 8, 8, 18, 16, 18); 
  imgIcons.image(imgPop, ICON_SIZE * POPULATION, 0, ICON_SIZE, ICON_SIZE);

  //SETTINGS ICON
  let imgSettings = new Graphic(24, 24);
  imgSettings.noFill();
  imgSettings.strokeWeight(2);
  imgSettings.stroke(SETTINGS_COLOR);
  imgSettings.ellipse(imgSettings.width/2, imgSettings.height/2, 22, 22);
  imgSettings.fill(SETTINGS_COLOR);
  imgSettings.noStroke();
  imgSettings.ellipse(12, 12, 12, 12);
  push();
    imgSettings.rectMode(CENTER);
    imgSettings.translate(12, 12);
    for (let i = 0; i < 4; i++) {
      imgSettings.rotate(radians(i * 45));
      imgSettings.rect(0, 0, 16, 3);
    }
    imgSettings.fill(Color.Black);
    imgSettings.ellipse(0, 0, 4, 4);
  pop();
  imgIcons.image(imgSettings, ICON_SIZE * SETTINGS, 0, ICON_SIZE, ICON_SIZE);

  //PAUSE ICON
  let imgPause = new Graphic(24, 24);
  imgPause.fill(PAUSE_COLOR);
  imgPause.noStroke();
  imgPause.rect(5, 4, 6, 16);
  imgPause.rect(13, 4, 6, 16);
  imgPause.noFill();
  imgPause.stroke(PAUSE_COLOR);
  imgPause.rect(0, 0, imgPause.width - 1, imgPause.height - 1);
  imgIcons.image(imgPause, ICON_SIZE * PAUSE, 0, ICON_SIZE, ICON_SIZE);

  //RUN ICON
  let imgRun = new Graphic(24, 24);
  imgRun.fill(RUN_COLOR);
  imgRun.noStroke();
  imgRun.triangle(6, 4, 18, 12, 6, 20);
  imgRun.noFill();
  imgRun.stroke(RUN_COLOR);
  imgRun.rect(0, 0, imgRun.width - 1, imgRun.height - 1);
  imgIcons.image(imgRun, ICON_SIZE * RUN, 0, ICON_SIZE, ICON_SIZE);

  //RESEARCH ICON
  let imgResearch = new Graphic(24, 24);
  imgResearch.noFill();
  imgResearch.strokeWeight(2);
  imgResearch.stroke(RESEARCH_COLOR);
  imgResearch.ellipse(imgResearch.width/2, imgResearch.height/2, 22, 22);
  imgResearch.fill(RESEARCH_COLOR);
  imgResearch.noStroke();
  imgResearch.ellipse(12, 16, 16, 5);
  imgResearch.triangle(4, 16, 12, 8, 20, 16);
  imgResearch.rect(10, 4, 4, 8);
  imgIcons.image(imgResearch, ICON_SIZE * RESEARCH, 0, ICON_SIZE, ICON_SIZE);

  //X CLOSE ICON
  let imgXClose = new Graphic(24, 24);
  imgXClose.noFill();
  imgXClose.stroke(XCLOSE_COLOR);
  imgXClose.rect(0, 0, imgXClose.width - 1, imgXClose.height - 1);
  imgXClose.fill(XCLOSE_COLOR);
  imgXClose.textAlign(CENTER, CENTER);
  imgXClose.textFont("Tahoma");
  imgXClose.textSize(18);
  imgXClose.text("X", 12, 12);
  imgIcons.image(imgXClose, ICON_SIZE * XCLOSE, 0, ICON_SIZE, ICON_SIZE);



  sprIcons = new Sprite(imgIcons, ICON_SIZE, ICON_SIZE);
}
