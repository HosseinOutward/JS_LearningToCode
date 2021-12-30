//training set. [length, width, color(0=blue and 1=red)]
var dataB1 = [1,   0.5, 0];
var dataB2 = [1.5, 1,   0];
var dataB3 = [1.5, 1.5, 0];
var dataB4 = [2,   1.5, 0];

var dataR1 = [2.5, 1.5, 1];
var dataR2 = [3,   1.5, 1];
var dataR3 = [3,   1,   1];
var dataR4 = [3.5, 1,   1];

//unknown type (data we want to find)
var dataU = [4,  1.5, "it should be 1"];

//starting weights, array of length and etc. for the neural net
var w = [1];
for(tk = 0; tk < 13; tk++) {w[tk] = -6 + tk}

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

//Neural nets
var NN1 = (w[0] * x[i] + w[1] * y[i] + w[2]);
var NN2 = (w[3] * x[i] + w[4] * y[i] + w[5]);
var NN3 = (w[6] * x[i] + w[7] * y[i] + w[8]);
var NN = (w[9] * NN1 + w[10] * NN2 + w[11] * NN3 + w[12]);

//sigmoid to limit the results to a number between 1 and 0
var S = 1 / (1 + Math.pow(2.718, NN));

//squared error for every individual dataset (just for fun)
var everycost = Math.pow((S - c[i]), 2);

// slope of the error and the change we will want to make to each smaller value
var everyslope = 2 * (S - c[i]);
function slopeF() {
   var clope = 0;
   for(i = 1; i < 9; i++) {
   reload();
   clope = clope + everyslope;
  };
  return clope;
};
var slope = slopeF();
var d = 5000;
var change = slope/d;

//function to Reload variables
function reload() {
  NN1 = (w[0] * x[i] + w[1] * y[i] + w[2]);
  NN2 = (w[3] * x[i] + w[4] * y[i] + w[5]);
  NN3 = (w[6] * x[i] + w[7] * y[i] + w[8]);
  NN = (w[9] * NN1 + w[10] * NN2 + w[11] * NN3 + w[12]);
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
var k = 1;
d = 1000
reload();

//finding the "right" value for w1, w2 and b
for (loopcounter = 0; loopcounter < 10000 ; loopcounter++) {

  reload();
  slope = slopeF();
  change = slope/d;
  i = k
   if (slope > 0) {
      if(randomchoice1 <= 12) {
        w[randomchoice1] = w[randomchoice1] + change
      }
   };

   if (slope < 0) {
      if(randomchoice2 <= 12) {
        w[randomchoice2] = w[randomchoice2] + change
      }
   };
  
  if (slope == 0) {break;}

   randomchoice1++;
   randomchoice2++;
   k++;
   if (k == 9) {k = 1};
   if (randomchoice1 == 13) {randomchoice1 = 0};
   if (randomchoice2 == 13) {randomchoice2 = 0};
};

//request for answer
i = 0;
reload();
dataU[2] = S;

var perc = Math.floor(dataU[2] * 10000)/100
if(dataU[2] < 0.7 && dataU[2] > 0.3) {alert("iduno. color variable: " + (perc / 100) + " (Blue: 0 and Red: 1)")} else {

    if(dataU[2] >= 0.7) {alert("I'm " + perc + "% sure its a Red flower");}
      
    if(dataU[2] <= 0.3) { alert("I'm " + (100 - perc) + "% sure its a Blue flower"); }
};