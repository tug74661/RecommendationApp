const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].getElementsByClassName.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
              }px)`;
        }
        else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(Math.floor(window.innerWidth / 270));
});

//TOOGLE

const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(
    ".container, .movie-list-title, .navbar, .sidebar, ileft-menu-icon, .toogle"
);

/*ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toogle("active");
    });
    ball.classList.toogle("active");
    //console.log("click registered");
});*/

  const light = document.getElementById("moon");
  const dark = document.getElementById("sun");

  light.addEventListener("click", () =>{
    document.querySelector(".navbar").style.backgroundColor = "white";
    document.getElementById("toogleBall").style.left = "1px";
  });

  dark.addEventListener("click", () =>{
    document.querySelector(".navbar").style.backgroundColor = "black";
    document.getElementById("toogleBall").style.right = "1px";
  });