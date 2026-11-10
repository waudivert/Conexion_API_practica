const btnCita = document.getElementById("btnCita");
const btnPerro = document.getElementById("btnPerro");
const btnGato = document.getElementById("btnGato");
const btnDato = document.getElementById("btnDato");


// CITA

async function cargarCita() {

    const textoCita = document.getElementById("textoCita");
    const autorCita = document.getElementById("autorCita");

    btnCita.disabled = true;

    textoCita.textContent = "Cargando...";
    autorCita.textContent = "";

    try {

        const respuesta = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        if (!respuesta.ok) {
            throw new Error("No se pudo obtener la cita.");
        }

        const datos = await respuesta.json();

        textoCita.textContent = `"${datos.quote}"`;
        autorCita.textContent = `— ${datos.author}`;

    }
    catch (error) {

        textoCita.textContent =
            "No se pudo cargar la cita. Intenta nuevamente.";

        autorCita.textContent = "";

        console.error(error);
    }
    finally {

        btnCita.disabled = false;
    }
}


// PERRO

async function cargarPerro() {

    const mensajePerro =
        document.getElementById("mensajePerro");

    const imagenPerro =
        document.getElementById("imagenPerro");

    btnPerro.disabled = true;

    mensajePerro.textContent = "Cargando...";

    imagenPerro.classList.add("d-none");

    try {

        const respuesta = await fetch(
            "https://dog.ceo/api/breeds/image/random"
        );

        if (!respuesta.ok) {
            throw new Error("No se pudo obtener la imagen del perro.");
        }

        const datos = await respuesta.json();

        imagenPerro.onload = function () {
            mensajePerro.textContent = "";
            imagenPerro.classList.remove("d-none");
        };

        imagenPerro.onerror = function () {
            mensajePerro.textContent =
                "La imagen del perro no pudo cargarse.";

            imagenPerro.classList.add("d-none");
        };

        imagenPerro.src = datos.message;

    }
    catch (error) {

        mensajePerro.textContent =
            "No se pudo cargar el perro. Intenta nuevamente.";

        imagenPerro.classList.add("d-none");

        console.error(error);
    }
    finally {

        btnPerro.disabled = false;
    }
}


// GATO

async function cargarGato() {

    const mensajeGato =
        document.getElementById("mensajeGato");

    const imagenGato =
        document.getElementById("imagenGato");

    btnGato.disabled = true;

    mensajeGato.textContent = "Cargando...";

    imagenGato.classList.add("d-none");

    try {

        const respuesta = await fetch(
            "https://cataas.com/cat?json=true"
        );

        if (!respuesta.ok) {
            throw new Error("No se pudo obtener el gato.");
        }

        const datos = await respuesta.json();

        let urlImagen;

        if (datos.url) {

            if (datos.url.startsWith("http")) {
                urlImagen = datos.url;
            }
            else {
                urlImagen = `https://cataas.com${datos.url}`;
            }

        }
        else if (datos.id) {

            urlImagen = `https://cataas.com/cat/${datos.id}`;

        }
        else if (datos._id) {

            urlImagen = `https://cataas.com/cat/${datos._id}`;

        }
        else {

            throw new Error(
                "La API no devolvió una URL ni un identificador."
            );
        }

        imagenGato.onload = function () {
            mensajeGato.textContent = "";
            imagenGato.classList.remove("d-none");
        };

        imagenGato.onerror = function () {
            mensajeGato.textContent =
                "La imagen del gato no pudo cargarse.";

            imagenGato.classList.add("d-none");
        };

        imagenGato.src = urlImagen;

    }
    catch (error) {

        mensajeGato.textContent =
            "No se pudo cargar el gato. Intenta nuevamente.";

        imagenGato.classList.add("d-none");

        console.error(error);
    }
    finally {

        btnGato.disabled = false;
    }
}


// DATO CURIOSO

async function cargarDatoCurioso() {

    const textoDato =
        document.getElementById("textoDato");

    btnDato.disabled = true;

    textoDato.textContent = "Cargando...";

    try {

        const respuesta = await fetch(
            "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
        );

        if (!respuesta.ok) {
            throw new Error(
                "No se pudo obtener el dato curioso."
            );
        }

        const datos = await respuesta.json();

        textoDato.textContent = datos.text;

    }
    catch (error) {

        textoDato.textContent =
            "No se pudo cargar el dato curioso. Intenta nuevamente.";

        console.error(error);
    }
    finally {

        btnDato.disabled = false;
    }
}


// BOTONES

btnCita.addEventListener(
    "click",
    cargarCita
);

btnPerro.addEventListener(
    "click",
    cargarPerro
);

btnGato.addEventListener(
    "click",
    cargarGato
);

btnDato.addEventListener(
    "click",
    cargarDatoCurioso
);


// CARGAR TODO AL ENTRAR

document.addEventListener(
    "DOMContentLoaded",
    function () {

        cargarCita();
        cargarPerro();
        cargarGato();
        cargarDatoCurioso();

    }
);