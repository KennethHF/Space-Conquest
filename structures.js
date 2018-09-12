var Farm = function() {

 this.imgIndex = 0;
 this.limitPerPlanet = 0;
 this.level = 1;
 this.itemID = 0;
 
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
}