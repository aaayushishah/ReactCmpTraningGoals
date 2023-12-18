// Esto garantiza que el código que se encuentre entre las { }, sólo se va a ejecutar DESPUES de que se haya cargado el documento HTML.
$(document).ready(function () {

   // Ejecución de la Barra de Navegación Adhesiva (Sticky) fuera del encabezado(<header>):
   $('.js-section-features').waypoint(function(direction) {
      if (direction == "down") {    // Cuando el usuario se desplaza hacia abajo, entonces se agrega la clase sticky.
         $('nav').addClass('sticky');
      } else {                      // Cuando el usuario se desplaza hacia arriba, entonces se elimina la clase sticky.
         $('nav').removeClass('sticky');
      }
   }, {
      offset: '60px'  // Aparecerá la clase sticky, 60px antes de llegar a la sección features (.section-features)
   });

   // Waypoint Script: http://imakewebthings.com/waypoints/guides/jquery-zepto/


   // Animacion de desplazamiento al hacer clic sobre los botones:
   $('.js-btn-full').click(function () {
      $('html, body').animate({scrollTop: $('.section-plans').offset().top}, 1000);
   });

   $('.js-btn-ghost').click(function () {
      $('html, body').animate({scrollTop: $('.section-features').offset().top}, 1000);
   });



   // Animacion de desplazamiento cuando se utilizan hashes (#) en los enlaces:
   $('a[href*="#"]')
   .not('[href="#"]')
   .not('[href="#0"]')
   .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({scrollTop: target.offset().top}, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
   });


   // Animacion cuando nos desplazamos/escroleamos hacia abajo:
   $('.js-animation-features').waypoint(function(direction) {
         $('.js-animation-features').addClass('animated fadeIn');
   }, {
         offset: '60%'
   });


   $('.js-animation-app-screen').waypoint(function(direction) {
         $('.js-animation-app-screen').addClass('animated fadeInUp');
   }, {
         offset: '45%'
   });


   $('.js-animation-cities').waypoint(function(direction) {
         $('.js-animation-cities').addClass('animated fadeIn');
   }, {
         offset: '50%'
   });

   $('.js-animation-plans').waypoint(function(direction) {
         $('.js-animation-plans').addClass('animated pulse');
   }, {
         offset: '50%'
   });


   // Animación para barra de navegacion receptiva para un ancho de pantalla inferior a 768px
   $('.js-mobile-nav-icon').click(function () {
      var nav = $('.js-main-nav');

      nav.slideToggle(200);  

      // OBS: el metodo slideToggle() se encarga de abrir y cerrar una caja. Lleva como parametro el tiempo en milisegundos que tarda en la animación en abrir y cerrar la caja.


      //if para intercambiar los iconos cuando se abre y se cierra la caja:

      //Si el icono tiene clase 'ion-navicon-round' ENTONCES le agrego la clase icon-close-round y borro la clase 'ion-navicon-round'. De lo contrario implemento la lógica inversa.

      var icon = $('.js-mobile-nav-icon i');

      if (icon.hasClass('ion-navicon-round')) {
         icon.addClass('ion-close-round');
         icon.removeClass('ion-navicon-round');
      } else {
         icon.addClass('ion-navicon-round');
         icon.removeClass('ion-close-round');
      }
   });

});
