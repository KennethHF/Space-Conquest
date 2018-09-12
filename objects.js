var displayBuffer = {
 draw : function() {
  imgGalaxy.draw();
  imgFrame.x = imgGalaxy.x + (DISPLAY.width() / 2);
  imgFrame.y = imgGalaxy.y;
  imgFrame.draw();
 }
}


var displayOuterFrame = {
 draw : function() {

  //Draw border filling (primary color)
  window.fill(PRIMARYCOLOR.R, PRIMARYCOLOR.G, PRIMARYCOLOR.B);
  window.noStroke();
  window.rect(0, 0, DISPLAY.screenWidth(), DISPLAY.screenHeight());

  if (DISPLAY.border() > 0) {
   //Draw inner most border (secondary color)
   window.stroke(SECONDARYCOLOR.R, SECONDARYCOLOR.G, SECONDARYCOLOR.B);
   window.noFill();
   window.rect(DISPLAY.border() - 1, DISPLAY.border() - 1, 
   DISPLAY.screenWidth() - (DISPLAY.border() * 2 - 1), 
   DISPLAY.screenHeight() - (DISPLAY.border() * 2 - 1));
   //Draw line under header bar
   window.line(DISPLAY.border(), DISPLAY.header() + DISPLAY.border() - 1,
   DISPLAY.screenWidth() - DISPLAY.border(), DISPLAY.header() + DISPLAY.border() - 1);
  }

  if (DISPLAY.border() >= 1) {
  //Outer rectangle (gray colors)
   window.stroke(220, 220, 220);
   window.line(0, DISPLAY.screenHeight() - 1, DISPLAY.screenWidth(), DISPLAY.screenHeight() - 1);
   window.line(DISPLAY.screenWidth() - 1, 0, DISPLAY.screenWidth() - 1, DISPLAY.screenHeight());
   window.stroke(100, 100, 100);
   window.line(0, 0, DISPLAY.screenWidth(), 0);
   window.line(0, 0, 0, DISPLAY.screenHeight());
  }

  if (DISPLAY.border() >= 2) {
   //Draw black middle layer
   //window.noFill();
   //window.stroke(0);
   //window.rect(1, 1, DISPLAY.screenWidth() - 3, DISPLAY.screenHeight() - 3);
  }

  //Draw game title
  window.textAlign(LEFT, TOP);
  window.textSize(FONTSIZE.LARGE);
  window.textStyle(NORMAL);
  window.textFont("Helvetica");
  window.fill(SECONDARYCOLOR.R, SECONDARYCOLOR.G, SECONDARYCOLOR.B);
  window.text("Space Conquest", DISPLAY.border() + 2, DISPLAY.border() + (DISPLAY.border() / 2));
 }
}