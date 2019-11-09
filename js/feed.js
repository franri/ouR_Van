document.addEventListener('DOMContentLoaded', function () {

    var elemsTabs = document.querySelectorAll('.tabs');
    var optionsTabs = {swipeable: true};
    var instanceTabs = M.Tabs.init(elemsTabs[1], optionsTabs);
    
    var elemsCar = document.querySelectorAll('.carousel');
    var optionsCar = {duration: 200, swipeable: true, dist: 0, padding: 0, fullWidth: false, indicators: true, numVisible: 5}; 
    var instancesCar = M.Carousel.init(elemsCar[0], optionsCar);
    
    var elemsMedia = document.querySelectorAll('.materialboxed');
    var optionsMedia = {inDuration: 400};
    var instancesMedia = M.Materialbox.init(elemsMedia, optionsMedia);

    var elemsCollapsible = document.querySelectorAll('.collapsible.expandable');
    var optionsCollapsible= {accordion: false};
    var instancesCollapsible = M.Collapsible.init(elemsCollapsible, optionsCollapsible);

    var b_satisfecho = document.querySelector("#boton-satisfecho");
    var b_neutral = document.querySelector("#boton-neutral");
    var b_insatisfecho = document.querySelector("#boton-insatisfecho");

    var c_satisfecho = document.querySelector("#contador-satisfecho");
    var c_neutral = document.querySelector("#contador-neutral");
    var c_insatisfecho = document.querySelector("#contador-insatisfecho");

    b_satisfecho.addEventListener( 'click', function() {
        c_satisfecho.innerHTML = parseInt(c_satisfecho.innerHTML) + 1;
    });
    b_neutral.addEventListener( 'click', function() {
        c_neutral.innerHTML = parseInt(c_neutral.innerHTML) + 1;
    });
    b_insatisfecho.addEventListener( 'click', function() {
        c_insatisfecho.innerHTML = parseInt(c_insatisfecho.innerHTML) + 1;
    });


    // para que full story tenga altura adecuada

    // cuando cliqueo en Full Story, le pongo la altura a tabs de fullstory sections
    document.querySelector('a[href^="#full-story"]').addEventListener('click', function(){
        secciones = document.querySelector("#full-story>div");
        newHeight = secciones.clientHeight;
        document.querySelector('div.tabs-content.carousel.carousel-slider').style.height = newHeight + 'px';
    });
    // cuando cliqueo en Feed, le pongo la altura a tabs de feed
    document.querySelector('a[href^="#feed"]').addEventListener('click', function(){
        secciones = document.querySelector("#feed>div.section");        
        newHeight = secciones.clientHeight;
        document.querySelector('div.tabs-content.carousel.carousel-slider').style.height = newHeight + 'px';
    });



});

window.onresize = function(){location.reload();};