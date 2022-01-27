//Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.
let numberOfSouvenirs = prompt("Введите количество сувениров:");
let numberOfTrinkets = prompt("Введите количество безделушек:");
const weightOfSouvenirs = 75;
const weightOfTrinkets = 112;
let sum = numberOfSouvenirs * weightOfSouvenirs + numberOfTrinkets * weightOfTrinkets;
document.write("<b>Вес 1 сувенира: </b>" + "75г" + "<br>");
document.write("<b>Вес 1 безделушки: </b>" + "112г" + "<br>");
document.write("<b>Количество сувениров: </b>" + numberOfSouvenirs + ";" + "<br>");
document.write("<b>Количество безделушек: </b>" + numberOfSouvenirs + ";" +"<br>");
document.write("<b>Общий вес посылки: </b>" + sum + "." +"<br>");
