let grid = document.querySelector(".container");
let btn = document.querySelector(".btn");

getRandomColor = () => {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var color = "rgb(" + red + "," + green + "," + blue + ")";

  return color;
};

colorGrid = () => {
  square.style.backgroundColor = getRandomColor();
};

makeGrid = (dimension) => {
  grid.innerHTML = "";
  const containerSize = 590;
  const squareSize = containerSize / dimension;

  for (let i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < dimension; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      row.appendChild(square);

      square.addEventListener("mouseover", () => {
        if (square.style.backgroundColor === "")
          square.style.backgroundColor = getRandomColor();
      });
    }
    grid.appendChild(row);
  }
};

btn.addEventListener("click", () => {
  let dimension = prompt(
    "How many squares should there be for each row? The maximum is 100.",
    "16"
  );
  dimension = parseInt(dimension);

  if (!isNaN(dimension) && dimension > 0 && dimension <= 100) {
    makeGrid(dimension);
  } else {
    alert(
      "Invalid input. Please enter a positive number less than or equal to 100 for dimensions."
    );
  }
});

makeGrid(16);
