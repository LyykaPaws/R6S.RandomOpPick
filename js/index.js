// -----ATTACKERS----- //
var attackers = [
  {
    name: "Sledge",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/7/76/Sledge_Icon_-_Standard.png/revision/latest?cb=20151222045526"
  },
  {
    name: "Thatcher",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/6/6d/Thatcher_Icon_-_Standard.png/revision/latest?cb=20151222045527"
  },
  {
    name: "Ash",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/d/d7/Ash_Icon_-_Standard.png/revision/latest?cb=20151222045522"
  },
  {
    name: "Thermite",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/e/e3/Thermite_Badge_2.png/revision/latest?cb=20151222045527"
  },
  {
    name: "Montagne",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/b/be/Montagne_Badge_2.png/revision/latest?cb=20151222045525"
  },
  {
    name: "Glaz",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/8/8d/Glaz_Badge_2.png/revision/latest?cb=20151222045524"
  },
  {
    name: "Fuze",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/3/3f/Fuze_Badge_2.png/revision/latest?cb=20151222045524"
  },
  {
    name: "Blitz",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/6/62/Blitz_Badge_2.png/revision/latest?cb=20151222045523"
  },
  {
    name: "IQ",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/b/b7/IQ_Badge_2.png/revision/latest?cb=20151222045524"
  },
  {
    name: "Buck",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/3/34/Buck_Badge_New.png/revision/latest?cb=20160203040454"
  },
  {
    name: "Blackbeard",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/d/dd/Blackbeard_badge.png/revision/latest?cb=20160509214645"
  },
  {
    name: "Capitão",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/4/4e/R6S-badge-capitao.png/revision/latest?cb=20160802150526"
  },
  {
    name: "Hibana",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/7/79/R6S-hibana.png/revision/latest?cb=20161118012747"
  },
  {
    name: "Jackal",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/d/d4/R6S-jackal.png/revision/latest?cb=20170206195745"
  },
  {
    name: "Ying",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/d/d7/R6S-Ying.png/revision/latest?cb=20170828194010"
  },
  {
    name: "Dokkaebi",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/0/0c/Dokkaebi_icon.png/revision/latest?cb=20171120222956"
  },
  {
    name: "Zofia",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/f/fb/Zofia_icon.png/revision/latest?cb=20171115182418"
  },
  {
    name: "Lion",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/4/47/Lion.png/revision/latest?cb=20180220011251"
  },
  {
    name: "Finka",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/d/de/Finka_icon.png/revision/latest?cb=20180220011308"
  }
];

// -----DEFENDERS----- //
var defenders = [
  {
    name: "Smoke",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/a/ae/Smoke_Icon_-_Standard.png/revision/latest?cb=20151222045526"
  },
  {
    name: "Mute",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/c/c2/Mute_Icon_-_Standard.png/revision/latest?cb=20151222045525"
  },
  {
    name: "Castle",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/a/a9/Castle_Badge_2.png/revision/latest?cb=20151222045523"
  },
  {
    name: "Pulse",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/4/40/Pulse_Badge_2.png/revision/latest?cb=20151222045526"
  },
  {
    name: "Doc",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/8/8f/Doc_Badge_2.png/revision/latest?cb=20151222045524"
  },
  {
    name: "Rook",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/a/ab/Rook_Badge_New_2.png/revision/latest?cb=20151222045526"
  },
  {
    name: "Kapkan",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/8/81/Kapkan_Badge_2.png/revision/latest?cb=20151222045525"
  },
  {
    name: "Tachanka",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/4/47/Tachanka_Badge.png/revision/latest?cb=20151202171641"
  },
  {
    name: "Jäger",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/9/95/Jager_Badge_2.png/revision/latest?cb=20151222045525"
  },
  {
    name: "Bandit",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/3/30/Bandit_Badge_2.png/revision/latest?cb=20151222045523"
  },
  {
    name: "Frost",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/c/c1/Frost_Badge_New.png/revision/latest?cb=20160203040937"
  },
  {
    name: "Valkyrie",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/e/ef/Valkyrie_badge.png/revision/latest?cb=20160509214702"
  },
  {
    name: "Caveira",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/e/ef/R6S-badge-caveira.png/revision/latest?cb=20160802150554"
  },
  {
    name: "Echo",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/b/b4/R6S-echo.png/revision/latest?cb=20161118012816"
  },
  {
    name: "Mira",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/8/8f/R6S-mira.png/revision/latest?cb=20170206200012"
  },
  {
    name: "Lesion",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/d/d2/R6S-Lesion.png/revision/latest?cb=20170828194022"
  },
  {
    name: "Ela",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/3/3f/Ela_icon.png/revision/latest?cb=20170913223125"
  },
  {
    name: "Vigil",
    icon:
      "https://vignette.wikia.nocookie.net/rainbowsix/images/1/1d/Vigil_icon.png/revision/latest?cb=20171120223005"
  }
];

// -----OTHERS----- //
var recruit;
// -----FUNCTIONS----- //
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}
var attackArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19
];
var defenseArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17
];

function doAttDiv(id, op) {
  var img = new Image(125, 125);
  var linebreak = document.createElement("br");
  img.src = attackers[op].icon;
  document.getElementById(id).innerHTML = "";
  document.getElementById(id).appendChild(img);
  document.getElementById(id).appendChild(linebreak);
  document
    .getElementById(id)
    .appendChild(document.createTextNode(attackers[op].name));
}
function doDefDiv(id, op) {
  var img = new Image(125, 125);
  var linebreak = document.createElement("br");
  img.src = defenders[op].icon;
  document.getElementById(id).innerHTML = "";
  document.getElementById(id).appendChild(img);
  document.getElementById(id).appendChild(linebreak);
  document
    .getElementById(id)
    .appendChild(document.createTextNode(defenders[op].name));
}

function generateA() {
  var op1 = 0,
    op2 = 0,
    op3 = 0,
    op4 = 0,
    op5 = 0,
    attackArray = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ];
    shuffle(attackArray);
    op1 = attackArray[0];
    op2 = attackArray[1];
    op3 = attackArray[2];
    op4 = attackArray[3];
    op5 = attackArray[4];
    doAttDiv("op1", op1);
    doAttDiv("op2", op2);
    doAttDiv("op3", op3);
    doAttDiv("op4", op4);
    doAttDiv("op5", op5);
}

function generateD() {
var  op5 = 0,
     op4 = 0,
     op3 = 0,
     op2 = 0,
     op1 = 0;
      defenseArray = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ];
    shuffle(defenseArray);
    op1 = defenseArray[0];
    op2 = defenseArray[1];
    op3 = defenseArray[2];
    op4 = defenseArray[3];
    op5 = defenseArray[4];
  doDefDiv("op1d", op1);
  doDefDiv("op2d", op2);
  doDefDiv("op3d", op3);
  doDefDiv("op4d", op4);
  doDefDiv("op5d", op5);
}