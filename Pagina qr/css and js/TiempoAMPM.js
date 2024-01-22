// Función para obtener la hora actual en formato de 12 horas
function obtenerHoraActual() {
    var ahora = new Date();
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();
    var ampm = horas >= 12 ? 'PM' : 'AM';

    // Convierte a formato de 12 horas
    horas = horas % 12;
    horas = horas ? horas : 12;

    // Formatea los minutos y segundos para que siempre tengan dos dígitos
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Devuelve la hora formateada
    return horas + ':' + minutos + ':' + segundos + ' ' + ampm;
}

// Función para actualizar el reloj cada segundo
function actualizarReloj() {
    var relojElemento = document.getElementById('RelojGamepro');
    if (relojElemento) {
        relojElemento.textContent = obtenerHoraActual();
    }
}

// Inicia el reloj al cargar la página
actualizarReloj();

// Actualiza el reloj cada segundo
setInterval(actualizarReloj, 1000);
