const btn = document.getElementById('toggle-theme');
const logo = document.getElementById('logo');

//função pra aplicar o tema
function applyTheme(theme){
  if(theme === 'dark') {
    document.body.classList.add('dark-mode');
    logo.src = "../images/logo-black.png";
  } else {
    document.body.classList.remove('dark-mode');
    logo.src = "../images/logo-white.png";
  }
}

//agora pra quando a pessoa escolher o tema ficar pra sempre
//verifica no localStorage qual tema já foi salvo
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || "light"); // padrao é a cor clara que é branco

//quando clicar no botão ele alterna
btn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem("theme", "light")
    applyTheme("light")
  } else {
    localStorage.setItem("theme", "dark")
    applyTheme("dark")
  }
})



