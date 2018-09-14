var SYSTEM_NAMES = [
 "Andari", "Vega", "Regulus", "Baal", "Nexil", "Pegasus",
 "Undi", "Denagu", "Indius", "Yegobah", "Quistanna",
 "Gregoria", "Augusta", "Chali", "Sedna", "Telli", "Hubble",
 "Zulu", "Ceres", "Media", "Dosi", "Capella", "Sirius",
 "Aldebaran", "Eridanus", "Sagittarius", "Lyra", "Solymus",
 "Peleus", "Zagreus", "Hemithea", "Orelia", "Sagitta",
 "Bodea", "Ferrite", "Canis", "Gallius", "Juno", "Kerby",
 "Kilios", "Lima", "Pavo", "Mollaia", "Nuva", "Optimus",
 "Sierra", "Tuva", "Torenno", "Univa", "Valadosus", "Wu",
 "Xavier", "Yoni", "Zel"
];

function getRandomSystemName() {
 if (SYSTEM_NAMES.length == 0) return "SYSTEM_NAMES EMPTY";
 var r = Math.floor(random(SYSTEM_NAMES.length));
 var systemName = SYSTEM_NAMES[r];
 SYSTEM_NAMES.splice(r, 1);
 return systemName;
}