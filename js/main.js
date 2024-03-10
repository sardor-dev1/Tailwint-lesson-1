const toggleBtn = document.getElementById("toggleBtn");
const menu = document.getElementById("menu");

let open = false;

toggleBtn.addEventListener("click", () => {
  open = !open;
  if (open) {
    menu.classList.add("block");
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("block");
  }
});
