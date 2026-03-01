setInterval(() => {
  const h1 = document.querySelector("h1");
  h1.style.color = h1.style.color === "red" ? "white" : "red";
}, 500);

document.querySelectorAll(".movie").forEach(movie => {
  const button = movie.querySelector(".toggle");
  const description = movie.querySelector(".description");

  button.addEventListener("click", () => {
    const isHidden = description.style.display === "none" || description.style.display === "";

    if (isHidden) {
      description.style.display = "block";
      button.textContent = "Show Less";
    } else {
      description.style.display = "none";
      button.textContent = "Show More";
    }
  });
});

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.add("flash-pop");

    setTimeout(() => {
      img.classList.remove("flash-pop");
    }, 1400); // 1400ms = how long the pop lasts
  });
});