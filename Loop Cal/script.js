alert("A car is going to start a race in a circular highway");

var fuel = prompt("How many kilometer(s) can the car go?\n(every 100 J is 1 KM)");
if (isNaN(fuel)) {alert("Not a valid value.");} else {

    var length = prompt("How long is the highway?");
    if (isNaN(length)) {alert("Not a valid value.");} else {

var runs = Math.abs(+fuel /100 / +length)
if ((runs < 1) && (runs > -1)) {alert("The car will never reach the finish line.");} else {

  if (length == 0) {
    for (var counter = 0 ; counter < 3 ; counter++) {
      alerter = +counter + 1;
      alert("The car passed the finish line " + alerter + " time(s).");
      if (counter == 2) { alert("The car will loop till the end of time. "); }
      }

} else {

    var fixer = runs - runs.toFixed(0)
    if (fixer != 0) {
      var FixedRuns = runs.toFixed(0)
      var ender;
      fixer++;
      for (counter = 1 ; counter < FixedRuns ; counter++) {
        ender = +FixedRuns - 1;
        alert("The car passed the finish line " + counter + " time(s).");
        if (ender == counter) { alert("The car only looped for " + counter +
        " time(s)\nand continued " + fixer + " but never reach the finish line after that."); }
        }

      } else {

        var alerter;
        var ender;
        for (counter = 0 ; counter < runs ; counter++) {
          alerter = +counter + 1;
          ender = +runs - 1;
          alert("The car passed the finish line " + alerter + " time(s).");
          if (ender == counter) { alert("The car only looped for " + alerter + " time(s)."); }
        }
    }

      }

  }

    }
  }
