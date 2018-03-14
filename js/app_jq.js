// kod projektu [wpisz nazwę]
$(document).ready(function(){
    ;
});

// kod projektu gra memory
$(document).ready(function(){
    ;
});
var cards = ["czerwony.jpeg", "fioletowy.jpeg", "pomarańczowy.jpeg", "żółty.jpeg", "czerwony.jpeg", "zielony.jpeg", "żółty.jpeg", "szary.jpeg", "niebieski.jpeg", "różowy.jpeg", "fioletowy.jpeg", "żółty.jpeg", "niebieski.jpeg", "zielony.jpeg", "szary.jpeg", "pomarańczowy.jpeg"];

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
var k16 = document.getElementById('k16');


k1.addEventListener("click", function() { revealCard(1); });
k2.addEventListener("click", function() { revealCard(2); });
k3.addEventListener("click", function() { revealCard(3); });
k4.addEventListener("click", function() { revealCard(4); });

k5.addEventListener("click", function() { revealCard(5); });
k6.addEventListener("click", function() { revealCard(6); });
k7.addEventListener("click", function() { revealCard(7); });
k8.addEventListener("click", function() { revealCard(8); });

k9.addEventListener("click", function() { revealCard(9); });
k10.addEventListener("click", function() { revealCard(10); });
k11.addEventListener("click", function() { revealCard(11); });
k12.addEventListener("click", function() { revealCard(12); });

k13.addEventListener("click", function() { revealCard(13); });
k14.addEventListener("click", function() { revealCard(14; });
k15.addEventListener("click", function() { revealCard(15); });
k16.addEventListener("click", function() { revealCard(16); });

var jedna_odkryta = false;
var widoczna_nr;
var blokada = false;
var znalezione_pary = 6;
