var Research = function(n, i, t, u, p, c, d, m) {
 this.name = n;
 this.effect = {
  item : i,
  tierUnlock : t,
  upkeepReduction : u,
  producesImprove : p,
  costDecrease : c,
 }
 this.description = d;
 this.imgIndex = m;
}

var AllResearches = [];

function loadResearches() {
 var r;
 r = new Research("Farming", 0, 1, 0, 0, 0, "Allows construction of Farms.", 0); AllResearches.push(r);
 r = new Research("Hydroponics", 0, 2, 0, 0, 0, "Allows construction of Tier II Farms.", 0); AllResearchs.push(r);
 r = new Research("Genetic Foods", 0, 3, 0, 0, 0, "Allows construction of Tier III Farms.", 0); AllResearches.push(r);
 r = new Research("Fertilizers", 0, 0, 0, 1.5, 0, "Improves Farm output by 1.5%", 0); AllResearches.push(r);
}