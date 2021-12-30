var GB = prompt("How many GB do you want to buy?");
if (GB > 0 && !isNaN(GB) ) {
    var GBnew = GB * 0.8;
    var price;

    switch ( true ) {

      case (GBnew <= 5):
        price = GB * 3.6;
        break;

      case (GBnew > 5 && GBnew <= 10):
        price = 18 + (GBnew - 5) * 2.8;
        break;

      case (GBnew > 10 && GBnew <= 20):
        price = 32 + (GBnew - 10) * 2.4;
        break;

      case (GBnew > 20 && GBnew <= 40):
        price = 56 + (GBnew - 20) * 2;;
        break;

      case (GBnew > 40):
        price = 96 + (GBnew - 40) * 1.6;
        break;

    }

    var gained = document.getElementById("gained");
    gained.innerHTML = "GB you'll get: " + GB;

    var toBuy =document.getElementById("toBuy");
    toBuy.innerHTML = "GB you have to buy: " + GBnew;

    var priceHTML =document.getElementById("price");
    priceHTML.innerHTML = "Price: " + price;
}
