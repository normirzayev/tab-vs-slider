const boxer = document.querySelectorAll(".tab_slide .boxer"),
  hozirgi = document.querySelector(".tab_slide .hozirgi"),
  jami = document.querySelector(".tab_slide .jami"),
  oldingi = document.querySelector(".tab_slide .oldingi"),
  keyingi = document.querySelector(".tab_slide .keyingi");

let tartib = 0;

jami.innerHTML = boxer.length <= 9 ? "/0" + boxer.length : "/" + boxer.length;
function slayderKorish(n) {
  boxer.forEach((qiymat) => {
    qiymat.style.display = "none";
  });
  boxer[n].style.display = "block";
  hozirgi.innerHTML = tartib < 9 ? "0" + (tartib + 1) : tartib + 1;
}
slayderKorish(tartib);

keyingi.addEventListener("click", () => {
  tartib = tartib + 1;
  if (tartib >= boxer.length) {
    tartib = 0;
  }
  slayderKorish(tartib);
});

oldingi.addEventListener("click", () => {
  tartib = tartib - 1;
  if (tartib < 0) {
    tartib = boxer.length - 1;
  }
  slayderKorish(tartib);
});

// slider swipe
let slider = document.querySelector(".slider .slayder"),
  last = document.querySelector(".slider .oldingi"),
  current = document.querySelector(".slider .hozirgi"),
  length = document.querySelector(".slider .jami"),
  slideItem = document.querySelectorAll(".box"),
  next = document.querySelector(".slider .keyingi");
let soni = 0;

function currentFunc() {
  let m = parseInt(soni / -100);
  current.innerHTML = m < 9 ? "0" + (m + 1) : m + 1;
}
length.innerHTML =
  slideItem.length <= 9 ? "/0" + slideItem.length : "/" + slideItem.length;
slider.style.cssText = `
  display: grid;
  grid-template-columns: repeat(${slideItem.length} , 100%);
`;

function korin(param) {
  slideItem.forEach((item) => {
    item.style.cssText = `
    transform: translateX(${param}%);
  `;
  });
  currentFunc();
}
korin(soni);
next.addEventListener("click", () => {
  if (soni <= (-slideItem.length + 1) * 100) {
    soni = 100;
  }
  soni = soni - 100;
  korin(soni);
});

last.addEventListener("click", () => {
  if (soni == 0) {
    soni = -(slideItem.length * 100);
  }
  soni = soni + 100;
  korin(soni);
});
