let data = [{
        image: "https://picsum.photos/id/7/200/",
        user: "Nemo",
        date: "14/2/2020",
        time: "11:58",
        text: "Acá estamos visitando el zoologico. Que lástima que los leones se escaparon y se comieron a los pingüinos antes de que llegaramos. ¡Nos perdimos el mejor evento de la semana!",
        comentarios: [{
                image: "https://picsum.photos/id/7/500/",
                user: "Jacobo",
                tipo: "otro",
                date: "14/2/2020",
                time: "11:58",
                text: "Que lastima que se lo perdieron! Fue por el tamaño de Chapita?",
            },
            {
                image: "https://picsum.photos/id/7/500/",
                user: "Nemo",
                tipo: "viajero",
                date: "14/2/2020",
                time: "11:58",
                text: "Que lastima que se lo perdieron! Fue por el tamaño de Chapita?",
            },
        ],
    },
    {
        image: "https://picsum.photos/id/7/200/",
        user: "Raquel",
        date: "14/2/2020",
        time: "11:58",
        text: "Visitando el lago mas transparente del mundo! Literalmente podrias entrar al lago sin darte cuenta de que esta ahí!",
        comentarios: [{
                image: "https://picsum.photos/id/7/500/",
                user: "Tío Jaime",
                tipo: "otro",
                date: "14/2/2020",
                time: "11:58",
                text: "Parece una zona bastante desierta. Donde estacionaron? No se les complico?",
            },
            {
                image: "https://picsum.photos/id/7/500/",
                user: "Juan",
                tipo: "viajero",
                date: "14/2/2020",
                time: "11:58",
                text: "Es bastante desierta si, pero Chapita se la banca! Tiene una tracción increible que te permite llegar a donde sea!",
            },
        ],
    },
    {
        image: "https://picsum.photos/id/7/200/",
        user: "Juan",
        date: "14/2/2020",
        time: "11:58",
        text: "Usando la parrilla movil para hacer un asado bien uruguayo en el parque!!!",
        comentarios: [{
                image: "https://picsum.photos/id/7/500/",
                user: "Tío Jaime",
                tipo: "otro",
                date: "14/2/2020",
                time: "11:58",
                text: "No se ve bien... pero parece que es a carbon!!",
            },
            {
                image: "https://picsum.photos/id/7/500/",
                user: "Juan",
                tipo: "viajero",
                date: "14/2/2020",
                time: "11:58",
                text: "No jaja, es a leña, sino no hubiera dicho asado \"uruguayo\"",
            }, {
                image: "https://picsum.photos/id/7/500/",
                user: "Tío Jaime",
                tipo: "otro",
                date: "14/2/2020",
                time: "11:58",
                text: "No se ve bien... pero parece que es a carbon!!",
            },
            {
                image: "https://picsum.photos/id/7/500/",
                user: "Juan",
                tipo: "viajero",
                date: "14/2/2020",
                time: "11:58",
                text: "No jaja, es a leña, sino no hubiera dicho asado \"uruguayo\"",
            }, {
                image: "https://picsum.photos/id/7/500/",
                user: "Tío Jaime",
                tipo: "otro",
                date: "14/2/2020",
                time: "11:58",
                text: "No se ve bien... pero parece que es a carbon!!",
            },
            {
                image: "https://picsum.photos/id/7/500/",
                user: "Juan",
                tipo: "viajero",
                date: "14/2/2020",
                time: "11:58",
                text: "No jaja, es a leña, sino no hubiera dicho asado \"uruguayo\"",
            }, {
                image: "https://picsum.photos/id/7/500/",
                user: "Tío Jaime",
                tipo: "otro",
                date: "14/2/2020",
                time: "11:58",
                text: "No se ve bien... pero parece que es a carbon!!",
            },
            {
                image: "https://picsum.photos/id/7/500/",
                user: "Juan",
                tipo: "viajero",
                date: "14/2/2020",
                time: "11:58",
                text: "No jaja, es a leña, sino no hubiera dicho asado \"uruguayo\"",
            },
        ],
    },
];

const CANTIDAD_DE_COMENTARIOS = data.length;

function tweet(number, image, user, date, time, text) {
    return `<div class="col s12 card horizontal orange lighten-5">
                    <div class="card-image">
                        <img class="materialboxed" data-caption="Una foto del zoologico!"
                            src="${image}">
                    </div>
                    <div class="card-stacked">
                        <div class="header-comments" style="padding: 1rem;">
                            <span>${user}</span>
                            <span>${date} <span>${time}</span></span>
                        </div>
                        <div class="card-content valign-wrapper">
                            <p class="flow-text">${text}</p>
                        </div>
                        <div class="card-action contenedor-botones-reaccion">
                            <span>
                                <a id="boton-satisfecho-${number}"
                                    class="btn-floating btn-medium waves-effect waves-light green"> <i
                                        class="small material-icons">sentiment_very_satisfied</i></a>
                                <span id="contador-satisfecho-${number}">0</span>
                            </span>
                            <span>
                                <a id="boton-neutral-${number}"
                                    class="btn-floating btn-medium waves-effect waves-light orange lighten-1">
                                    <i class="small material-icons">sentiment_neutral</i></a>
                                <span id="contador-neutral-${number}">0</span>
                            </span>
                            <span>
                                <a id="boton-insatisfecho-${number}"
                                    class="btn-floating btn-medium waves-effect waves-light red"> <i
                                        class="small material-icons">sentiment_very_dissatisfied</i></a>
                                <span id="contador-insatisfecho-${number}">0</span>
                            </span>
                        </div>
                    </div>
                </div>`;
};

function respuesta_viajero(imagen, user, date, time, text) {
    return respuesta_generica(imagen, user, date, time, text, "orange");
};

function respuesta_otro(imagen, user, date, time, text) {
    return respuesta_generica(imagen, user, date, time, text, "grey");
};

function respuesta_generica(imagen, user, date, time, text, tipo) {
    return `
                <div class="card-panel ${tipo} lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s2">
                            <img src="${imagen}" alt=""
                                class="circle responsive-img">
                        </div>
                        <div class="col s10">
                            <div class="header-comments">
                                <span>${user}</span>
                                <span>${date} <span>${time}</span></span>
                            </div>
                            <br>
                            <span class="black-text">
                                ${text}
                            </span>
                        </div>
                    </div>
            </div>`;
};

function collapsible(comentarios) {
    function collapsibleWrapper(comments, length) {
        return `<ul class="col s12 collapsible hide-on-med-and-up expandable">
                <li>
                    <div class="collapsible-header"> <i
                            class="material-icons">keyboard_arrow_down</i>Comentarios<span>${length}</span>
                    </div>
                    <div class="collapsible-body">
                        ${comments}
                    </div>
                    </li>
                </ul>`;
    };

    function wrapper(comment) {
        return `<div class="hide-on-med-and-up">
                    ${comment}
                </div>`;
    };

    let bloque_comentarios = "";
    comentarios.forEach(comentario => {
        bloque_comentarios += wrapper(comentario);
    });

    let collapsibleHtml = collapsibleWrapper(bloque_comentarios, comentarios.length);
    return collapsibleHtml;
};

function mensajes_grandes(comentarios) {

    function wrapper(comment) {
        return `<div class="col m9 push-m3 hide-on-small-only">
                    ${comment}
                </div>`;
    };

    bloque_comentarios = "";
    comentarios.forEach(comentario => {
        bloque_comentarios += wrapper(comentario);
    });

    return bloque_comentarios;
}

function cargarTweets() {
    let html = "";

    function tweetEntero(principal, grandes, collapsible) {
        return `
        ${principal}
        ${grandes}
        ${collapsible}`;
    };

    data.forEach((current, index) => {
        let comentarioPrincipal = current;
        let principalHtml = tweet(index, comentarioPrincipal.image, comentarioPrincipal.user, comentarioPrincipal.date, comentarioPrincipal.time, comentarioPrincipal.text);
        let comentariosData = current.comentarios;
        let comentariosArray = [];
        let grandesHtml = "";
        let collapsibleHtml = ""
        comentariosData.forEach(cadaComentario => {
            let comentarioParseado = "";
            if (cadaComentario.tipo === "viajero") {
                comentarioParseado = respuesta_viajero(cadaComentario.image, cadaComentario.user, cadaComentario.date, cadaComentario.time, cadaComentario.text);
            } else {
                comentarioParseado = respuesta_otro(cadaComentario.image, cadaComentario.user, cadaComentario.date, cadaComentario.time, cadaComentario.text);
            }
            comentariosArray.push(comentarioParseado);
        });
        grandesHtml = mensajes_grandes(comentariosArray);
        collapsibleHtml = collapsible(comentariosArray);

        html += tweetEntero(principalHtml, grandesHtml, collapsibleHtml);
    });

    document.querySelector("#feed>.section>.row").insertAdjacentHTML('beforeend', html);
}



document.addEventListener('DOMContentLoaded', function () {

    cargarTweets();
    inicializarBotonesDeReaccion();

    var elemsTabs = document.querySelectorAll('.tabs');
    var optionsTabs = {
        swipeable: true
    };
    var instanceTabs = M.Tabs.init(elemsTabs[1], optionsTabs);

    var elemsCar = document.querySelectorAll('.carousel');
    var optionsCar = {
        duration: 200,
        swipeable: true,
        dist: 0,
        padding: 0,
        fullWidth: false,
        indicators: true,
        numVisible: 5
    };
    var instancesCar = M.Carousel.init(elemsCar[0], optionsCar);

    var elemsMedia = document.querySelectorAll('.materialboxed');
    var optionsMedia = {
        inDuration: 400
    };
    var instancesMedia = M.Materialbox.init(elemsMedia, optionsMedia);

    var elemsCollapsible = document.querySelectorAll('.collapsible.expandable');
    var optionsCollapsible = {
        accordion: false
    };
    var instancesCollapsible = M.Collapsible.init(elemsCollapsible, optionsCollapsible);

    // para que full story tenga altura adecuada

    // cuando cliqueo en Full Story, le pongo la altura a tabs de fullstory sections
    document.querySelector('a[href^="#full-story"]').addEventListener('click', function () {
        clearInterval();
        secciones = document.querySelector("#full-story>div");
        newHeight = secciones.clientHeight;
        document.querySelector('div.tabs-content.carousel.carousel-slider').style.height = newHeight + 'px';
        arreglarProblemaDeTamanio();
    });
    // cuando cliqueo en Feed, le pongo la altura a tabs de feed
    document.querySelector('a[href^="#feed"]').addEventListener('click', function () {
        clearInterval();
        secciones = document.querySelector("#feed>div.section");
        newHeight = secciones.clientHeight;
        document.querySelector('div.tabs-content.carousel.carousel-slider').style.height = newHeight + 'px';
        arreglarProblemaDeTamanio();
    });

    arreglarProblemaDeTamanio();



});

function arreglarProblemaDeTamanio() {
    setInterval(function () {
        let feed = document.querySelector('a[href^="#feed"]');
        let fullStory = document.querySelector('a[href^="#full-story"]');

        if (feed.classList.contains("active")) {
            this.setTimeout(function () {
                feed.click();
            }, 250);
        } else if (fullStory.classList.contains("active")) {
            this.setTimeout(function () {
                fullStory.click();
            }, 250);
        }
    }, 2000);
};

function inicializarBotonesDeReaccion() {

    for (let i = 0; i < CANTIDAD_DE_COMENTARIOS; i++) {

        let b_satisfecho = document.querySelector("#boton-satisfecho-" + i);
        let b_neutral = document.querySelector("#boton-neutral-" + i);
        let b_insatisfecho = document.querySelector("#boton-insatisfecho-" + i);

        let c_satisfecho = document.querySelector("#contador-satisfecho-" + i);
        let c_neutral = document.querySelector("#contador-neutral-" + i);
        let c_insatisfecho = document.querySelector("#contador-insatisfecho-" + i);

        b_satisfecho.addEventListener('click', () => {
            c_satisfecho.innerHTML = parseInt(c_satisfecho.innerHTML) + 1;
        });
        b_neutral.addEventListener('click', () => {
            c_neutral.innerHTML = parseInt(c_neutral.innerHTML) + 1;
        });
        b_insatisfecho.addEventListener('click', () => {
            c_insatisfecho.innerHTML = parseInt(c_insatisfecho.innerHTML) + 1;
        });


    }

};