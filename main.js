$(document).ready(function () {
    $(".p1").hover(function () {
        arriba = Math.random() * (400 - 1) + 1;
        abajo = Math.random() * (609 - 1) + 1;
        $(this).css("top", arriba);
        $(this).css("left", abajo);
    });
});
function dijoSi() {
    document.getElementById("si").style.display = "block";
}
