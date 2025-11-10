const btnmodeToggle = document.getElementById("btnb");

// Pega o tema salvo ou define "light" como padrão
const themeSystem = localStorage.getItem("themeSystem") || "light";
defineCurrentTheme(themeSystem);

// Quando clicar no botão
btnmodeToggle.addEventListener("click", () => {
  let oldTheme = localStorage.getItem("themeSystem") || "light";
  let newTheme = oldTheme === "light" ? "dark" : "light";

  localStorage.setItem("themeSystem", newTheme);
  defineCurrentTheme(newTheme);
});

// Função que aplica o tema
function defineCurrentTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}
