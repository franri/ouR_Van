document.addEventListener('DOMContentLoaded', function() {

    // Parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);

    //Scrollspy
    // init
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
    // para que se mueva con la página
    var pushpins = document.querySelectorAll(".pushpin");
    pushpins.forEach(function (element) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var elemRect = element.getBoundingClientRect();
        // ojo, acordarse de agregar parentElement de más
        // https://stackoverflow.com/questions/53735893/materialize-css-pushpin-init-with-pure-javascript-no-jquery
        var parentRect = element.parentElement.parentElement.getBoundingClientRect();
        var elemTop = scrollTop + elemRect.top;

        var instancePushpin = M.Pushpin.init(element, {
            top: elemTop,
            bottom: elemTop + parentRect.height - elemRect.height
        });
    })
  });