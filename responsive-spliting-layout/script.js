let Partition = document.querySelector(".partition");
let vertical = document.getElementById("vertical");
let horizontal = document.getElementById("horizontal");
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const trackColor = [];
trackColor.push(getRandomColor());

let partitionHeight = 100;
let partitionWidth = 100;
Partition.style.backgroundColor = getRandomColor();
Partition.style.width = `${partitionWidth}%`;
Partition.style.height = `${partitionHeight}vh`;

vertical.onclick = function () {
  console.log("Vertical button clicked");
  partitionHeight = partitionHeight / 2;
  Partition.style.width = `${partitionHeight}%`;
  let Div = document.createElement("div");
  Div.style.backgroundColor = getRandomColor();
  Div.style.width = "50%";
  Div.style.height = "100vh";
  Div.appendChild(vertical);
  Div.appendChild(horizontal);
  document.body.appendChild(Div);
};

// Set event listener for the horizontal button
horizontal.onclick = function () {
  console.log("Horizontal button clicked");
  partitionHeight = partitionHeight / 2;
  Partition.style.height = `${partitionHeight}vh`;
};
