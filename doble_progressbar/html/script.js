$(function () {
  window.addEventListener("message", function (event) {
    if (event.data.action === "mostrar") {
      const texto = event.data.texto;
      const duracion = event.data.duracion;

      $("#progress-text").text(texto);
      $("#progress-fill").css("width", "0%");
      $("#progress-container").fadeIn(200);

      let start = null;

      function animar(timestamp) {
        if (!start) start = timestamp;
        const progreso = timestamp - start;
        const porcentaje = Math.min((progreso / duracion) * 100, 100);
        $("#progress-fill").css("width", porcentaje + "%");

        if (progreso < duracion) {
          requestAnimationFrame(animar);
        } else {
          setTimeout(() => {
            $("#progress-container").fadeOut(300);
          }, 250);
        }
      }

      requestAnimationFrame(animar);
    }

    if (event.data.action === "ocultar") {
      $("#progress-container").fadeOut(200);
    }
  });
});
