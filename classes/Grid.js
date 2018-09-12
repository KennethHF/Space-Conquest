//Reusable Grid object (class)
//Requires the p5 library for draw() and isMouseOver() functions
/*
 var g;
 g = new Grid(5,5,32,32);

 g.move(100, 100);
 g.draw();

 Getters:

 g.size();
 g.width();
 g.height();
 g.point(3);
 g.index(52,12);
 g.neighbor(4, DIRECTION.NORTH);
 g.isMouseOver();
 g.addToCellGroup(3);
 g.eraseCellGroup();
 g.populateDistantCells(3, 6, true);

*/

var DIRECTION = {
 NORTH : 0,
 NORTHEAST : 1,
 EAST : 2,
 SOUTHEAST : 3,
 SOUTH : 4,
 SOUTHWEST : 5,
 WEST : 6,
 NORTHWEST : 7
}

var Grid = function (col, rw, w, h) {
 this.columns = (col == null ? 5 : col);
 this.rows = (rw == null ? 5 : rw);
 this.cellWidth = (w == null ? 32 : w);
 this.cellHeight = (h == null ? 32 : h);
 this.border = 0;
 this.x = 0;
 this.y = 0;
 this.clrFill = 255;
 this.clrBorder = 0;
 this.cellGroup = [];
 this.allowHorizontalWrap = false;
}

Grid.prototype.draw = function () {
 noStroke();
 fill(this.clrBorder);
 rect(this.x, this.y, this.width(), this.height());
 fill(this.clrFill);
 for (var i = 0; i < this.size(); i++)
  rect(this.point(i).x, this.point(i).y, this.cellWidth, this.cellHeight);
}

Grid.prototype.size = function() {
 return (this.columns * this.rows);
}

Grid.prototype.move = function(newX, newY) {
 if (newX == null && newY == null) { newX = 0; newY = 0; }
 if (newY == null) { newY = newX.y; newX = newX.x; }
 this.x = newX;
 this.y = newY;
}

Grid.prototype.width = function () {
 var borderSpacing = this.border * (this.columns - 1);
 return (this.columns * this.cellWidth) + borderSpacing;
}

Grid.prototype.height = function () {
 var borderSpacing = this.border * (this.rows - 1);
 return (this.rows * this.cellHeight) + borderSpacing;
}

Grid.prototype.point = function (index) {
 index = Math.floor(index);
 var p = { x: this.x, y: this.y };
 if (index == null || index <= 0 || index >= this.size()) return p;

 p.x = (index % this.columns) * (this.cellWidth + this.border);
 p.y = Math.floor(index / this.columns) * (this.cellHeight + this.border);
 p.x += this.x;
 p.y += this.y;
 return p;
}

Grid.prototype.index = function (point, optY) {
 if (point == null) return -1;

 var p;
 if (optY == null) {
  p = point;
 } else {
  p = { x: point, y: optY };
 }

 if ((p.x < this.x) || p.x > (this.x + this.width())) return -1;
 if ((p.y < this.y) || p.y > (this.y + this.height())) return -1;

 var thisColumn = Math.floor((p.x - this.x) / (this.cellWidth + this.border));
 var thisRow = Math.floor((p.y - this.y) / (this.cellHeight + this.border));
 if (thisColumn >= this.columns) return -1;
 if (thisRow >= this.rows) return -1;

 var theIndex = (thisRow * this.columns) + thisColumn;

 //Return -1 if within border regions
 var cellPoint = this.point(theIndex);
 if (p.x > (cellPoint.x + this.cellWidth)) return -1;
 if (p.y > (cellPoint.y + this.cellHeight)) return -1;

 return theIndex;
}

/*
  Directions for neighbors traverse clockwise and are:
  North(0), NorthEast(1), East(2), SouthEast(3), 
  South(4), SouthWest(5), West(6), NorthWest(7)
*/
Grid.prototype.neighbor = function (index, direction) {
 if ((index == null) || (index < 0) || (index >= this.size())) return -1;
 if ((direction == null) || (direction < 0) || (direction > 7)) return -1;
 index = Math.floor(index);
 direction = Math.floor(direction);

 var neighborIndex = -1;
 switch (direction) {

  case 0: //North
   neighborIndex = index - this.columns;
   if (neighborIndex < 0) neighborIndex = -1;
   break;

  case 1: //North East
   neighborIndex = index - this.columns + 1;
   if ((neighborIndex < 0) || (neighborIndex % this.columns == 0)) neighborIndex = -1;
   break;

  case 2: //East
   neighborIndex = index + 1;
   if (neighborIndex % this.columns == 0) neighborIndex = -1;
   if (this.allowHorizontalWrap && neighborIndex == -1) neighborIndex = index + 1 - this.columns;
   break;

  case 3: //South East
   neighborIndex = index + this.columns + 1;
   if ((neighborIndex % this.columns == 0) || (neighborIndex >= this.size())) neighborIndex = -1;
   break;

  case 4: //South
   neighborIndex = index + this.columns;
   if (neighborIndex >= this.size()) neighborIndex = -1;
   break;

  case 5: //South West
   neighborIndex = index + this.columns - 1;
   if ((neighborIndex >= this.size()) || (index % this.columns == 0)) neighborIndex = -1;
   break;

  case 6: //West
   neighborIndex = index - 1;
   if (index % this.columns == 0) neighborIndex = -1;
   if (this.allowHorizontalWrap && neighborIndex == -1) neighborIndex = index - 1 + this.columns;
   break;

  case 7: //North West
   neighborIndex = index - this.columns - 1;
   if ((neighborIndex < 0) || (index % this.columns == 0)) neighborIndex = -1;
   break;

 }
 return neighborIndex;
}

Grid.prototype.isMouseOver = function() {
 if ((mouseX >= this.x) && (mouseX < this.x + this.width()) &&
     (mouseY >= this.y) && (mouseY < this.x + this.height())) {
  return (this.index(mouseX, mouseY));
 }
 return -1;
}

Grid.prototype.addToCellGroup = function(c) {
 if (c < 0 || c >= this.size()) return;
 for (var check = 0; check < this.cellGroup.length; check++)
  if (this.cellGroup[check] == c) return;
 this.cellGroup.push(c);
}

Grid.prototype.eraseCellGroup = function() { this.cellGroup = []; }

Grid.prototype.populateDistantCells = function(refCell, distance, allowDiag) {
 this.eraseCellGroup();
 if (refCell < 0 || refCell >= this.size()) return;
 this.addToCellGroup(refCell);
 if (distance <= 0) return;

 if (allowDiag == null) allowDiag = false;
 if (allowDiag != true && allowDiag != false) allowDiag = false;

 //For each distance count, loop through all existing 
 //cells in the cellGroup and find their immediate
 //neighbors
 for (var x = 0; x < distance; x++) {
  var count = this.cellGroup.length;
  for (var i = 0; i < count; i++) {
   this.addToCellGroup(this.neighbor(this.cellGroup[i], 0)); //North
   this.addToCellGroup(this.neighbor(this.cellGroup[i], 4)); //South
   this.addToCellGroup(this.neighbor(this.cellGroup[i], 2)); //East
   this.addToCellGroup(this.neighbor(this.cellGroup[i], 6)); //West
   if (allowDiag) {
    this.addToCellGroup(this.neighbor(this.cellGroup[i], 1)); //NorthEast
    this.addToCellGroup(this.neighbor(this.cellGroup[i], 7)); //NorthWest
    this.addToCellGroup(this.neighbor(this.cellGroup[i], 3)); //SouthEast
    this.addToCellGroup(this.neighbor(this.cellGroup[i], 5)); //SouthWest
   }
  }
 }
}
