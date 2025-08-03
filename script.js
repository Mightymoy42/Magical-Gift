const today = new Date().getDate();  // current day of the month (1–31)
const messages = {
  1: { text: "You're amazing!", img: "images/placeholder.jpg" },
  2: { text: "You make life brighter.", img: "images/placeholder.jpg" },
  3: { text: "You're appreciated!", img: "images/placeholder.jpg" },
  // Add more messages here...
};

const calendar = document.getElementById("calendar");

for (let day = 1; day <= 31; day++) {
  const div = document.createElement("div");
  div.className = "day";
  div.textContent = day;

  if (day > today) {
    div.classList.add("locked");
  } else {
    div.addEventListener("click", () => showMessage(day));
  }

  calendar.appendChild(div);
}

function showMessage(day) {
  const modal = document.getElementById("modal");
  const text = document.getElementById("messageText");
  const img = document.getElementById("messageImage");

  const message = messages[day];
  text.textContent = message ? message.text : "You're awesome!";
  img.src = message ? message.img : "images/placeholder.jpg";

  modal.classList.remove("hidden");
}

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});
