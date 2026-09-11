const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");

window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 20);
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

async function copyCa(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const input = document.createElement("textarea");
    input.value = value;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }

  toast.textContent = `Copied ${value}`;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".copy-ca").forEach((button) => {
  button.addEventListener("click", () => copyCa(button.dataset.ca || "0x61507223B3f394e849A921898C8631EeC65bb8cD"));
});
