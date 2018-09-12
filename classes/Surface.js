//A drawing surface used to load and manipulate
//images, such as tile sheets.
/*

 var s;
 s = new Surface("image.png") -function preload()
 s.create(320, 320);

 s.move(100, 100);
 s.fill(255);
 s.defineTiles(32, 32);
 s.resize(64,64);
 s.draw(tileIndex);
 s.tile(3);

 Getters:

 s.width();
 s.height();
 s.columns();
 s.rows();
 s.size(); 

*/

var Surface = function(fileString) {

 this._img = null;
 this.x = 0;
 this.y = 0;
 this._tWidth = 0;
 this._tHeight = 0;
 this._tIndex = -1;
 this._destW = 0;
 this._destH = 0;

 if (fileString != null) this._img = loadImage(fileString);
}

Surface.prototype.create = function(w, h) {
 this._img = createGraphics(w, h);
}

Surface.prototype.move = function(newX, newY) {
 this.x = (isNaN(newX) ? 0 : newX);
 this.y = (isNaN(newY) ? 0 : newY);
}

Surface.prototype.fill = function(clr) {
 this._img.background(clr);
}

Surface.prototype.defineTiles = function(tileW, tileH) {
 this._tWidth = ((isNaN(tileW) || tileW <= 0) ? 0 : tileW);
 this._tHeight = ((isNaN(tileH) || tileH <= 0) ? 0 : tileH);
 this._destW = this._tWidth;
 this._destH = this._tHeight;
}

Surface.prototype.resize = function(newW, newH) {
 this._destW = ((isNaN(newW) || newW <= 0) ? this._tWidth : newW);
 this._destH = ((isNaN(newH) || newH <= 0) ? this._tHeight : newH);
}

Surface.prototype.tile = function(tileIndex) {
 this._tIndex = (isNaN(tileIndex) || tileIndex == null ? -1 : Math.floor(tileIndex));
 if (tileIndex < 0) this._tIndex = -1;
 if (tileIndex >= this.size()) this._tIndex = this.size() - 1; 
}


Surface.prototype.width = function() { return this._img.width; }
Surface.prototype.height = function() { return this._img.height; }
Surface.prototype.columns = function() { 
  if (this._tWidth <= 0) return 0;
  return Math.floor(this._img.width / this._tWidth); 
}
Surface.prototype.rows = function() { 
  if (this._tHeight <= 0) return 0;
  return Math.floor(this._img.height / this._tHeight); 
}
Surface.prototype.size = function() { return (this.columns() * this.rows()); }





Surface.prototype.draw = function(tileIndex) {
 if (this._img == null) return;
 
 var w = this._tWidth;
 var h = this._tHeight;
 if (isNaN(w) || w < 0) w = 0;
 if (isNaN(h) || h < 0) h = 0;

 var destW = this._destW;
 var destH = this._destH;
 if (isNaN(destW) || destW < 0) destW = w;
 if (isNaN(destH) || destH < 0) destH = h;
 
 this.tile(this._tIndex);
 var t = this._tIndex;

 //Allow override of _tIndex
 if (tileIndex != null) {
   t = (isNaN(tileIndex) ? -1 : Math.floor(tileIndex));
   if (tileIndex < 0) t = -1;
   if (tileIndex >= this.size()) t = this.size() - 1; 
 }
 
 if (w == 0 || h == 0 || t == -1) {
  image(this._img, this.x, this.y);
  return;
 }

 var srcX = (t % this.columns()) * w;
 var srcY = Math.floor(t / this.columns()) * h;

 image(this._img, this.x, this.y, destW, destH, srcX, srcY, w, h);
}