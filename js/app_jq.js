// kod projektu [wpisz nazwę]
$(document).ready(function(){
    ;
});

// kod projektu gra memory
$(document).ready(function(){
    ;
});

//tablica z kartami (tylko po jednej karcie z pary)
let karty = ["czerwony.jpg", "fioletowy.jpg", "pomarańczowy.jpg", "żółty.jpg", "zielony.jpg", "szary.jpg", "niebieski.jpg", "różowy.jpg"];

// ta funkcja odpowiada za podwojenie kart i przedstawieniu ich w losowej kolejności
let shuffleArray = (array) => $.map(array, (element) => [element, element]).sort(() => 0.5 - Math.random());

karty = shuffleArray(karty);


//każda karta ma swoją wartość

var k0 = document.getElementById('k0');
var k1 = document.getElementById('k1');
var k2 = document.getElementById('k2');
var k3 = document.getElementById('k3');

var k4 = document.getElementById('k4');
var k5 = document.getElementById('k5');
var k6 = document.getElementById('k6');
var k7 = document.getElementById('k7');

var k8 = document.getElementById('k8');
var k9 = document.getElementById('k9');
var k10 = document.getElementById('k10');
var k11 = document.getElementById('k11');

var k12 = document.getElementById('k12');
var k13 = document.getElementById('k13');
var k14 = document.getElementById('k14');
var k15 = document.getElementById('k15');

//każda karta ma też swojego "nasłuchiwacza"

k0.addEventListener("click", function() { wywołanieKarty(0); });
k1.addEventListener("click", function() { wywołanieKarty(1); });
k2.addEventListener("click", function() { wywołanieKarty(2); });
k3.addEventListener("click", function() { wywołanieKarty(3); });

k4.addEventListener("click", function() { wywołanieKarty(4); });
k5.addEventListener("click", function() { wywołanieKarty(5); });
k6.addEventListener("click", function() { wywołanieKarty(6); });
k7.addEventListener("click", function() { wywołanieKarty(7); });

k8.addEventListener("click", function() { wywołanieKarty(8); });
k9.addEventListener("click", function() { wywołanieKarty(9); });
k10.addEventListener("click", function() { wywołanieKarty(10); });
k11.addEventListener("click", function() { wywołanieKarty(11); });

k12.addEventListener("click", function() { wywołanieKarty(12); });
k13.addEventListener("click", function() { wywołanieKarty(13); });
k14.addEventListener("click", function() { wywołanieKarty(14); });
k15.addEventListener("click", function() { wywołanieKarty(15); });
