function getHasilComp() {
  const random = Math.random();

  if (random <= 0.34) return "semut";
  if (random > 0.34 && random < 0.68) return "orang";
  return "gajah";
}

function getHasilUser(user, comp) {
  if (user == comp) return "IMBANG";
  if (user == "semut") {
    if (comp == "gajah") return "MENANG";
    return "KALAH";
  }
  if (user == "gajah") {
    if (comp == "semut") return "KALAH";
    return "MENANG";
  }

  if (user == "orang") {
    if (comp == "semut") return "MENANG";
    return "KALAH";
  }
}

const input = document.querySelectorAll(".input");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", function () {
    const value = input[i].getAttribute("value");
    const hasilComputer = getHasilComp();
    const hasilUser = getHasilUser(value, hasilComputer);

    const pilihanComp = document.querySelector(".pilihanComp");
    pilihanComp.setAttribute("src", "img/" + hasilComputer + ".png");
    console.log(hasilComputer);

    const tampilHasil = document.querySelector("#hasil");
    tampilHasil.innerHTML = hasilUser;
  });
}
