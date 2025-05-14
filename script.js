document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("moreBtn");
  const extraInfo = document.getElementById("extraInfo");

  button.addEventListener("click", () => {
    extraInfo.classList.toggle("hidden");

    if (!extraInfo.classList.contains("hidden")) {
      button.textContent = "Ver menos";
    } else {
      button.textContent = "Ver más";
    }
  });
});
