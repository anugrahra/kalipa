// Konsentrasi Koagulan
function hitungKonsentrasi() {
	var massa = document.getElementById("massa").value;
	var vair = document.getElementById("vair").value;

	var konsentrasi = ( massa / vair ) * 100;

	document.getElementById("hCKoagulan").value = konsentrasi;
}

//Jar Test
function hitungJartest() {
	var dosisingin = document.getElementById("dosisingin").value;
	var beaker = document.getElementById("beaker").value;
	var konsenjar = document.getElementById("konsenjar").value;

	var volumekoagulan = ( dosisingin * beaker ) / ( konsenjar * 10000 );

	document.getElementById("hJarTest").value = volumekoagulan;
}

function hitungVnotch() {
	var hvnotch = document.getElementById("hvnotch").value;

	var debitVnotch = 1.39 * Math.pow( hvnotch, 5/2 );

	document.getElementById("hasilVnotch").value = debitVnotch;
}

//Dosering
function hitungDosering() {
	var debitipa = document.getElementById("debitipa").value;
	var dosisop = document.getElementById("dosisop").value;
	var konsentrasiForDosering = document.getElementById("konsentrasiForDosering").value;

	var dosering = ( ( debitipa * dosisop ) / ( konsentrasiForDosering * 10000 ) ) * 1000;

	document.getElementById("hDosering").value = dosering;
}

//Stroke
function hitungStroke() {
	var qmax = document.getElementById("qmax").value;
	var jmlstroke = document.getElementById("jmlstroke").value;
	var doseringforstroke = document.getElementById("doseringforstroke").value;

	var qperdetik = ( qmax / 60 );
	var qperstroke = qperdetik / jmlstroke;
	var stroke = doseringforstroke / qperstroke;

	document.getElementById("hStroke").value = stroke;
}

// smooth scrolling
$(document).ready(function(){
	$("a").on('click' , function(event){
		if (this.hash !== ""){
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
    		}, 

            1500, function(){
    		    window.location.hash = hash;
    		});
    	}
    });
});

// kembali ke menu
$(document).ready(function(){
	$(".gotop").on('click' , function(event){
		if (this.hash !== ""){
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
    		}, 

            800, function(){
    		    window.location.hash = hash;
    		});
    	}
    });
});