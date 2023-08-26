$(document).ready(function () {
    $(".p1").hover(function () {
        document.getElementById("no").style.position = "absolute";
        const anchoViewport = window.innerWidth;
        const altoViewport = window.innerHeight;
        abajo = Math.random() * (anchoViewport - 46) + 1;
        arriba = Math.random() * (altoViewport - 46) + 1;
        $(this).css("top", arriba);
        $(this).css("left", abajo);
    });
});

function dijoSi() {
    document.getElementById("si").style.display = "flex";
    const elementosP1 = document.getElementsByClassName("p1");

    // Iterar a través de la colección y establecer la propiedad "position" para cada elemento
    for (let i = 0; i < elementosP1.length; i++) {
        elementosP1[i].style.position = "relative";
    }
}
