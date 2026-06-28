let tx = JSON.parse(localStorage.getItem("tx")) || [];

function loadTx() {
  let table = document.getElementById("txTable");
  let search = document.getElementById("search").value.toLowerCase();
  let filter = document.getElementById("filter").value;

  table.innerHTML = "";

  tx
    .slice()
    .reverse()
    .filter(t => {
      let matchType = filter === "all" || t.type === filter;
      let matchSearch =
        t.type.toLowerCase().includes(search) ||
        (t.to || "").toLowerCase().includes(search) ||
        (t.ref || "").toLowerCase().includes(search);

      return matchType && matchSearch;
    })
    .forEach(t => {
      table.innerHTML += `
        <tr>
          <td>${t.type}</td>
          <td>₱${t.amount}</td>
          <td>${t.to || "-"}</td>
          <td>${t.date}</td>
          <td>${t.time}</td>
          <td>${t.ref || "-"}</td>
        </tr>
      `;
    });
}

loadTx();
