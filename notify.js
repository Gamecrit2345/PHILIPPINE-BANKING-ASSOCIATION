function notify(msg, type="success") {
  let div = document.createElement("div");

  div.innerText = msg;

  div.style.position = "fixed";
  div.style.bottom = "20px";
  div.style.right = "20px";
  div.style.padding = "12px 18px";
  div.style.borderRadius = "8px";
  div.style.color = "white";
  div.style.background = type === "success" ? "#10b981" : "#ef4444";
  div.style.zIndex = "9999";

  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 2500);
}
