// kod projektu gra memory
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

//początek gry
//jest "false", bo jeszcze żadna nie jest odkryta
var jednaOdkryta = false;
//to początek, więc narazie nie wykonano żadnego ruchu
var ruchy = 0;
//to nada odkrytej karcie numer, pózniej się on przyda
var odkryta_nr;
//blokada wyłączona, żeby wogóle można było coś zrobić
var blokada = false;
//żeby wygrać trzeba znalezć 8 par, licznik ten odlicza od 8 do 0
var pozostałePary = 8;


//pokazanie karty działa jako zmiana jej wygłądu w css'ie
function wywołanieKarty(nr) {
	var wartośćWidoczności = $('#k'+nr).css('opacity');

/* tutaj jest kod dotyczący blokady, bo po wybraniu dwóch kart można szybko dalej odsłaniać, a w ten sposób można odsłonić tylko dwie
i licznik dodaje kolejną próbę */
	if (wartośćWidoczności != 0 && blokada == false) {
		blokada = true;

//ta wartość zmienia kartę z pytajnikiem na odpowiedni obrazek z katologu img
		var obraz = "url(img/" + karty[nr] + ")";

//za pomocą jQuery zmienia się klasa z "karta" na "kartaA", i widać co się wybrało
		$('#k'+nr).css('background-image', obraz);
		$('#k'+nr).addClass('kartaA');
		$('#k'+nr).removeClass('karta');

		//to dotyczy pierwszej, odkrytej karty
		if(jednaOdkryta == false) {
			//jedna jest odkryta
			jednaOdkryta = true;
			//teraz otrzymuje ona numer
			odkryta_nr = nr;
			//blokada jest wyłączona, żeby można było wybrać drugą kartę
			blokada = false;
		}
		/*to dotyczy drugiej odkrytej karty, i sprawdza czy jest taka sama jak pierwsza czy inna, i co trzeba wtedy zrobić */
		else {

			//jeśli sa takie same to są niewidoczne, i wyglada to jak by zniknęły
			if(karty[odkryta_nr] == karty[nr]) {
			//to jest czas pozostania na planszy kart, żeby gracz zdążył zobaczyć jakie zniknęły
				setTimeout(function() { ukryjDwieKarty(nr, odkryta_nr) }, 800);

			}
			//jeżeli wybrał dwie inne karty to przez sekundę zostają widoczne, a pózniej znowu widać pytajnik
			else {

				setTimeout(function() { przywróćDwieKarty(nr, odkryta_nr) }, 1000);
			}
			// za pomącą jQery można dostać się do elementu za pomocą html, i zmienić 0 na prawidłową liczbę ruchów
			ruchy++;
			$('.wynik').html('Próby: '+ruchy);
			jednaOdkryta = false;
		}

	}

}

//jeżeli gracz wybrał inne karty to ta funkcja zamienia obrazki na pytajnik
function ukryjDwieKarty(nr1, nr2) {
	$('#k'+nr1).css('opacity', '0');
	$('#k'+nr2).css('opacity', '0');

//trzeba odkryć 8 par, a zły ruch nie może zmieniać tej wartości
	pozostałePary--;

//jeżeli gracz znalazł 8 par, to licznik wyliczył "0 pozostałych par", to oznacza zwycięstwo
	if(pozostałePary == 0) {
		// tutaj tablica zniknie, i wyswietli sie taki komunikat
		$('.tablica').html('<h1>Wygrałeś!<br>Udało Ci się w '+ruchy+' ruchach<br>Brawo!</h1>');
	}

	//blokada wyłączona, żeby po złym ruchu można było dalej grać
	blokada = false;
}
