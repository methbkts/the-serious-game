// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require jquery_ujs
//= require rails-ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function() {
    $('#mapid').on('click', '#startgame', function() {
         firstMarker.closePopup();
         L.marker([45.7623314, 4.8275598]).addTo(map)
        .bindPopup('<h4>Là où tout devient clair</h4><p>Dans la cathédrale, j’ai trouvé un extrait de l’Évangile selon Saint-Jean. C’est un Évangile que l’on trouve également dans le Codex.<p>A l’aide du texte, tu pourras traduire:</p>').openPopup()
    });
})


//Quand le joueur est connecté, et qu'il clique sur commencer la partie => Changement du background, apparition de la map, lancement musique.
$(document).ready(function(){
	$(".start").click(function(){
		$('.start').hide();
		$('body').append('<style>body:before{-webkit-filter: blur(1.5px) sepia(100%) grayscale(80%) contrast(50%) opacity(50%); -moz-filter: blur(1.5px) sepia(90%) grayscale(80%) contrast(50%) opacity(50%); -o-filter: blur(1.5px) sepia(90%) grayscale(80%) contrast(50%) opacity(50%); -ms-filter: blur(1.5px) sepia(90%) grayscale(80%) contrast(50%) opacity(50%); filter: blur(1.5px) sepia(90%) grayscale(80%) contrast(50%) opacity(50%); transform: scale(1.02)!important;}</style>');
		$('#mapid').fadeTo( 2000, 1);
		player = document.getElementById('sound');
		player.play();

	});
});

