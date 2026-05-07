const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showLine = async () => {
  for (let i = 0; i < 5; i++) {
    let randomMS = Math.floor(Math.random() * (7000 - 1000 + 1) + 1000);
    let div = document.querySelector(`#d${i + 1}`);
    await delay(randomMS);
    div.classList.remove("hidden");
    animateDots(div);
  }
};

const animateDots = (element) => {
  let d1 = document.createElement("p");
  d1.classList.add("hidden");
  d1.innerText = ".";
  let d2 = document.createElement("p");
  d2.classList.add("hidden");
  d2.innerText = ".";
  let d3 = document.createElement("p");
  d3.classList.add("hidden");
  d3.innerText = ".";
  element.after(d1, d2, d3);
  let dots = [d1, d2, d3];
  setInterval(() => {
    dots.forEach((dot, index) => {
      setTimeout(
        () => {
          dot.classList.remove("hidden");
        },
        200 * (index + 1)
      );
      setTimeout(
        () => {
          dot.classList.add("hidden");
        },
        200 * (index + 4)
      );
    });
  }, 1800);
};

showLine();
