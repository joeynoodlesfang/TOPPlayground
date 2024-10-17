// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const pRedText = document.createElement("p");
pRedText.classList.add("redText");
pRedText.textContent = "Hey I'm Red!";
pRedText.style.color = "red";

container.appendChild(pRedText);

const h3BlueText = document.createElement("h3");
h3BlueText.classList.add("blueText");
h3BlueText.textContent = "Hey I'm Blue!";
h3BlueText.style.color = "#0000ff";

container.appendChild(h3BlueText);

const border3 = document.createElement("div");
const border3h1 = document.createElement("h1");
const border3p = document.createElement("p");
border3h1.classList.add("border3");
border3h1.textContent = "I'm in a div";
border3p.classList.add("border3");
border3p.textContent = "ME TOO!";
border3.classList.add("container");
border3.style.backgroundColor = "pink";
// border3.style.borderColor = "black";
border3.style.border = "thick solid black";
border3.style.width = "300px";
border3.appendChild(border3h1);
border3.appendChild(border3p);
container.appendChild(border3);

// the JavaScript file
const btn = document.querySelector("#btn");

btn.style.color = "red";

// the JavaScript file
const btn2 = document.querySelector("#btn2");

// the JavaScript file
// METHOD 1
function alertFunction() {
    alert("YAY! YOU DID IT!!!!!!!!!");
  }

//   const btn = document.querySelector("#btn");
  
  // METHOD 2
  btn.onclick = alertFunction;
  
  // METHOD 3
  btn2.addEventListener("click", alertFunction);
  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  