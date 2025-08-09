function getHasilComp() {
  const random = Math.random();

  if (random <= 0.34) return "semut";
  if (random > 0.34 && random < 0.68) return "orang";
  return "gajah";
}

function putar() {
  let i = 0;
  const arr = ["gajah", "semut", "orang"];
  const imgComp = document.querySelector("#inputComputer");
  const time = new Date().getTime();

  const intervalId = setInterval(function () {
    imgComp.setAttribute("src", "img/" + arr[i++] + ".png");

    if (new Date().getTime() - time > 1000) {
      clearInterval(intervalId); // <== Panggil dengan ID
      return;
    }

    if (i == arr.length) i = 0;
  }, 100);
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
  let skorComp = 0;
  let skorUser = 0;
  input[i].addEventListener("click", function () {
    const value = input[i].getAttribute("value");
    const hasilComputer = getHasilComp();
    const hasilUser = getHasilUser(value, hasilComputer);
    const tampilSkorComp = document.querySelector("#skorComp");
    const tampilSkorUser = document.querySelector("#skorUser");

    if (hasilUser == "IMBANG") {
    } else if (hasilUser == "MENANG") {
      skorUser += 1;
    } else if (hasilUser == "KALAH") {
      skorComp += 1;
    }

    putar();

    setTimeout(() => {
      const pilihanComp = document.querySelector(".pilihanComp");
      pilihanComp.setAttribute("src", "img/" + hasilComputer + ".png");

      const tampilHasil = document.querySelector("#hasil");
      tampilHasil.innerHTML = hasilUser;

      tampilSkorComp.innerHTML = "SKOR = " + skorComp;
      tampilSkorUser.innerHTML = "SKOR = " + skorUser;
    }, 1000);
  });
}
