async function loadFoods() {
  let res = await fetch("http://localhost:5000/foods");
  let data = await res.json();

  let container = document.querySelector(".container");
  container.innerHTML = "";

  data.forEach(item => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h2>${item.name}</h2>
      <p>₹${item.price}</p>
      <button onclick="orderFood('${item.name}')">Order</button>
    `;
    container.appendChild(div);
  });
}

async function orderFood(name) {
  await fetch("http://localhost:5000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  });

  alert(name + " ordered!");
}

loadFoods();