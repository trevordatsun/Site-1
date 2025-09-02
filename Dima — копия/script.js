const modal = document.getElementById("offenseModal");
const btn = document.querySelector(".btn2");
const closeBtn = document.querySelector(".close");
const apologizeBtn = document.getElementById("apologizeBtn");
const doubleOffenseBtn = document.getElementById("doubleOffenseBtn");
const apologyResponse = document.getElementById("apologyResponse");
const doubleOffenseResponse = document.getElementById("doubleOffenseResponse");

btn.onclick = function () {
  modal.style.display = "block";

  apologyResponse.style.display = "none";
  doubleOffenseResponse.style.display = "none";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

apologizeBtn.onclick = function () {
  apologyResponse.style.display = "block";
  doubleOffenseResponse.style.display = "none";

  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);
};

doubleOffenseBtn.onclick = function () {
  doubleOffenseResponse.style.display = "block";
  apologyResponse.style.display = "none";

  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);
};

function createRipple(event) {
  const button = event.currentTarget;
  if (button.querySelector(".ripple")) return;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${
    event.clientX - button.getBoundingClientRect().left - radius
  }px`;
  circle.style.top = `${
    event.clientY - button.getBoundingClientRect().top - radius
  }px`;
  circle.classList.add("ripple");

  button.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 600);
}

document
  .querySelectorAll(".btn1, .btn2, #apologizeBtn, #doubleOffenseBtn")
  .forEach((button) => {
    button.addEventListener("click", createRipple);
  });

document.querySelectorAll(".fri-ic").forEach((button, index) => {
  button.addEventListener("mouseenter", () => {
    button.style.zIndex = "100";
    button.style.transform = "scale(1.3) translateY(-5px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.zIndex = (6 - index).toString();
    button.style.transform = "scale(1)";
  });
});

document.querySelectorAll(".fri-ic").forEach((button, index) => {
  const links = [
    "https://t.me/Wavepma",
    "https://t.me/ulililiii",
    "https://t.me/Lazzy_Kitten",
    "https://ratings.fide.com/profile/54161770",
    "https://t.me/rebrikhachess",
    "https://t.me/sharknocare",
  ];

  button.setAttribute("data-link", links[index]);
  button.style.cursor = "pointer";

  button.addEventListener("click", function () {
    const link = this.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank");
    }
  });

  button.addEventListener("mouseenter", () => {
    button.style.zIndex = "100";
    button.style.transform = "scale(1.3) translateY(-5px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.zIndex = (6 - index).toString();
    button.style.transform = "scale(1)";
  });
});

const friendsModal = document.getElementById("friendsModal");
const friendsCloseBtn = document.querySelector(".friends-close");

function openFriendsModal() {
  friendsModal.style.display = "block";
}

function closeFriendsModal() {
  friendsModal.style.display = "none";
}

friendsCloseBtn.onclick = closeFriendsModal;

window.addEventListener("click", function (event) {
  if (event.target === friendsModal) {
    closeFriendsModal();
  }
});

document
  .querySelector(".friends h2")
  .addEventListener("click", openFriendsModal);
document.querySelector(".friends h2").style.cursor = "pointer";

document.querySelectorAll(".friend-img").forEach((img, index) => {
  const links = [
    "https://t.me/Wavepma",
    "https://t.me/ulililiii",
    "https://t.me/Lazzy_Kitten",
    "https://ratings.fide.com/profile/54161770",
    "https://t.me/rebrikhachess",
    "https://t.me/sharknocare",
  ];

  img.style.cursor = "pointer";
  img.addEventListener("click", function (e) {
    e.stopPropagation();
    window.open(links[index], "_blank");
  });
});

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme") || "dark";
body.setAttribute("data-theme", savedTheme);
updateThemeButton();

themeToggle.addEventListener("click", function () {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  updateThemeButton();
  playThemeSound();
});

function updateThemeButton() {
  const currentTheme = body.getAttribute("data-theme");
  themeToggle.textContent = currentTheme === "dark" ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", function () {
  this.style.transform = "scale(0.9) rotate(180deg)";
  setTimeout(() => {
    this.style.transform = "scale(1) rotate(0deg)";
  }, 300);
});
