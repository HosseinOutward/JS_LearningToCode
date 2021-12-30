var GB = prompt("How many GB do you want to buy?");
if (GB > 0 && !isNaN(GB) ) {
    var GBnew = GB * 0.8;
    var price;

    if (GBnew <= 5) {
    price = GB * 3.6; }

    if (GBnew > 5 && GBnew <= 10) {
    price = 18 + (GBnew - 5) * 2.8; }

    if (GBnew > 10 && GBnew <= 20) {
    price = 32 + (GBnew - 10) * 2.4; }

    if (GBnew > 20 && GBnew <= 40) {
    price = 56 + (GBnew - 20) * 2; }

    if (GBnew > 40) {
    price = 96 + (GBnew - 40) * 1.6; }

    alert("GB you'll get: " + GB + "\nGB you have to buy: " + GBnew + "\nPrice: " + price);
}
