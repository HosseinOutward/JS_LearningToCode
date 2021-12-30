alert("A car is going to start a race in a circular highway");
//Input start
var energy = prompt("How many kilometer(s) can the car go (it's energy)?\n(every 10000 J is 1 KM)");
if (isNaN(energy)) {alert("Not a valid value.");} else {
  var distance = prompt("How long is the highway?");
  if (isNaN(distance)) {alert("Not a valid value.");} else {
//Input end
//Calculation start
      var runs = Math.abs(+energy /10000 / +distance)
//If the car  never reaches the finish line:
      if ( (runs < 1) && (runs > -1) ) {
        var fixerKM = runs * distance
        alert("The car will never reach the finish line\nbut it did go " + fixerKM + " KM of the highway's distance.");
      } else {
//If the car loops for ever:
          if (distance == 0) {
              for (var counter = 1 ; counter <= 3 ; counter++) {
                alert("The car passed the finish line " + counter + " time(s).");
                if (counter == 3) { alert("The car will loop till the end of time.\n(becuse its right on top of the finish line and you have to go 0 KM to reach it\n so your passing the finish line again and again til you move from tha point.)"); }
              }
          } else {
//If the car passed the finish line more than once but stoped before reaching a last time:
              var fixer = runs - runs.toFixed(0)
              if (fixer != 0) {
                var fixer = runs - parseInt(runs)
                var fixerKM = fixer * distance
                runs = Number.parseInt(runs);
                for (counter = 1 ; counter <= runs ; counter++) {
                  alert("The car passed the finish line " + counter + " time(s).");
                  if (counter == runs) { alert("The car only looped for " + counter + "time(s)\nand continued " + fixer + " (" + fixerKM + " KM) but never reach the finish line after that."); }
                }
              } else {
//If the car was going normally:
                  for (counter = 1 ; counter <= runs ; counter++) {
                    alert("The car passed the finish line " + counter + " time(s).");
                    if (counter == runs) { alert("The car only looped for " + counter + " time(s)."); }
                }
              }
//Calculation end
        }
    }

      }
    }
