let el = document.createElement("div");
// document.querySelector(".content").append(el)
document.querySelector(".content").prepend(el);
window.addEventListener('online',e => {
  el.textContent = "online";
  el.className = "btn";
  el.classList = "btn-success";
  });
  window.addEventListener('offline',e => {
    el.textContent = "offline";
    el.className = "btn";
    el.classList = "btn-danger";
    });
