function convertCurrency() {
  const pkrAmount = document.getElementById("pkr").value;
  const usdAmount = pkrAmount / 285;
  document.getElementById("usd").value = usdAmount.toFixed(2);
}
let Navbar = document.querySelector(".navbar");
let Navlist = document.querySelector(".navlist");
let Burger = document.querySelector(".burger");
Burger.addEventListener("click", () => {
  Navlist.classList.toggle("v-nav-resp");
  Navbar.classList.toggle("h-nav-resp");
});
