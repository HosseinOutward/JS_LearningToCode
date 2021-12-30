//Input start
var num1 = prompt("Num1");
if ( !isNaN(num1) ) {

  var act = prompt("Action");
  if ( (act == "+") || (act == "-") || (act == "*") || (act == "/") ||
  (act == "%") ) {

    var num2 = prompt("Num2");
    if ( !isNaN(num2) ) {
//Input end

//Calculator start

function CalculationFN () {

  switch ( act ) {

        case "+":
           num1 = +num1 + +num2;
            ReCalFN ();
            break;

        case "-":
           num1 = +num1 - +num2;
            ReCalFN ();
            break;

        case "*":
           num1 = +num1 * +num2;
            ReCalFN ();
            break;

        case "/":
           if ( ( act == "/" ) && ( num2 == 0) )
           { alert("Error: Undifiend\nResult: Infinity"); } else {
            num1 = +num1 / +num2; }
             ReCalFN ();
            break;

        case "%":
           num1 = +num1 * +num2 /100;
            ReCalFN ();
            break;

          }

       }

//.............................

       function ReCalFN () {

        act = prompt(" " + num1 + "\n New Action");
        if ( (act == "+") || (act == "-") || (act == "*") || (act == "/") ||
         (act == "%") ) {

          num2 = prompt("AnyNum");
          if ( !isNaN(num2) ) {

     CalculationFN ();

           } else { alert("Error: no valid action"); }
         } else { alert("Error: no valid value"); }

       }

//Calculator end

CalculationFN ();

//Error start
    } else { alert("Error: no valid value"); }
  } else { alert("Error: no valid action"); }
} else { alert("Error: no valid value"); }
//Error end
