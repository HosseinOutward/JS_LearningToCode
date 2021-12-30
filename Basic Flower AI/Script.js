//training set. [length, width, color(0=blue and 1=red)]
var dataB1 = [2.5, 1.5, 0];
var dataB2 = [1.5, 1,   0];
var dataB3 = [2.5, 1.5, 0];
var dataB4 = [2,   1.5, 0];

var dataR1 = [2.5, 1.5, 1];
var dataR2 = [3,   1.5, 1];
var dataR3 = [3.5, 2.5, 1];
var dataR4 = [3,   2,   1];

//unknown type (data we want to find)
var dataU = [3.5,  2, "it should be 1"];

//starting weights, array of length and etc. for the neural net
var w1 = 1.5;
var w2 = -1;
var w3 = 0
var b = 1;

var x = [
dataU[0], dataB1[0], dataB2[0], dataB3[0], dataB4[0], dataR1[0], dataR2[0], dataR3[0], dataR4[0]
];

var y = [
dataU[1], dataB1[1], dataB2[1], dataB3[1], dataB4[1], dataR1[1], dataR2[1], dataR3[1], dataR4[1]
];

var c = [
dataU[2], dataB1[2], dataB2[2], dataB3[2], dataB4[2], dataR1[2], dataR2[2], dataR3[2], dataR4[2]
];

//data set selecter
var i = 1;

//Neural net
var NN = (w1 * x[i] + w2 * y[i] + b);

//sigmoid to limit the results to a number between 1 and 0
var S = 1 / (1 + Math.pow(2.718, NN));

//squared error for every individual dataset (just for fun)
var everycost = Math.pow((S - c[i]), 2);

// slope of the error and the change we will want to make to each smaller value
var everyslope = 2 * (S - c[i]);
function slopeF() {
   var clope = 0;
   for(i = 1; i < x.length; i++) {
   reload();
   clope = clope + everyslope;
 };
  return clope;
};
var slope = slopeF();
var change = 0.49 * slope;

//function to Reload variables
function reload() {
  NN = (w1 * x[i] + w2 * y[i] + w3 * y[i] * x[i] + w1 * w2 * w3 * y[i] * x[i] + b);
  S = 1 / (1 + Math.pow(2.718, NN));
  everycost = Math.pow((S - c[i]), 2);
  everyslope = 2 * (S - c[i]);
};

//overall cost (just for fun)
function cost() {
   var kost = 0;
   for(i = 1; i < x.length; i++) {
   reload();
   kost = kost + everycost;
 };
 return kost;
};

//self explanatory
var loopcounter = 0;
var randomchoice1 = 0;
var randomchoice2 = 0;
i = 1;

//finding the "right" value for w1, w2 and b
for (loopcounter = 0; loopcounter < 100000 ; loopcounter++) {

  reload();
  slope = slopeF();
  change = 0.49 * slope;

  if (slope > 0) {
     
     switch (randomchoice1) {
       case 0:
        w1 = w1 + change;
        break;
       case 1:
        w2 = w2 + change;
        break;
       case 2:
        w3 = w3 + change;
        break;
       case 3:
        b = b + change;
        randomchoice1 = 0;
        break;
     };
   };

  if (slope < 0) {
     
     switch (randomchoice2) {
       case 0:
        w1 = w1 + change;
        break;
       case 1:
        w2 = w2 + change;
        break;
        case 2:
        w3 = w3 + change;
        break;
       case 3:
        b = b + change;
        randomchoice2 = 0;
        break;
     };
  };
  
 if (slope == 0) {break;}
 
  randomchoice1++;
  randomchoice2++;
  i++;
  if (i == 8) {i = 1};
};

//request for answer
i = 0;

reload();

dataU[2] = S;


var perc = Math.floor(dataU[2] * 10000)/100

if(dataU[2] < 0.7 && dataU[2] > 0.2) {alert("iduno. color variable: " + (perc / 100) + " (Blue: 0 and Red: 1)")} else {

    if(dataU[2] >= 0.7) {alert("I'm " + perc + "% sure its a Red flower");}
      
    if(dataU[2] <= 0.2) { alert("I'm " + (100 - perc) + "% sure its a Blue flower"); }
};