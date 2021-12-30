//Input start
var num1 = prompt("Num1");
if ( ( num1 <= 0 ) || ( num1 > 0 ) ) {

  var act = prompt("Action");
  if ( (act == "+") || (act == "-") || (act == "*") || (act == "/") ||
  (act == "%") )
   {
    var num2 = prompt("Num2");
    if ( ( num1 <= 0 ) || ( num1 > 0 ) ) {
//Input end

//Calculator start
       if (act == "+") { alert(num1 + num2); }
       if (act == "-") { alert(num1 - num2); }
       if (act == "*") { alert(num1 * num2); }
     if ( ( act == "/" ) && ( num2 == 0)) { alert("Error: Mathmaticli Undifiend"); }
       if (act == "/") { alert(num1 / num2); }
       if (act == "%") { alert(num1 * num2 /100 ); }
//Calculator end

//Error start
    } else { alert("Error: no valid value"); }
  } else { alert("Error: no valid function"); }
} else { alert("Error: no valid value"); }
//Error end
