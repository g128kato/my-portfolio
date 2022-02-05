var img_src = [
  "img/soccer.JPG",
  "img/shiro.JPG",
  "img/kyoto.JPG",
  "img/wakayama.jpg",
  "img/station.jpg",
];

let num = -1;

function slide_time() {
  if (num === 4) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide_img").src = img_src[num];
}

setInterval(slide_time, 3000);

var ims = document.getElementsByName("im");
var aki = 15;

function game_start() {
  ims[0].src = "img/puzzle0.jpg";
  ims[1].src = "img/puzzle2.jpg";
  ims[2].src = "img/puzzle3.jpg";
  ims[3].src = "img/puzzle1.jpg";
  ims[4].src = "img/puzzle5.jpg";
  ims[5].src = "img/puzzle6.jpg";
  ims[6].src = "img/puzzle10.jpg";
  ims[7].src = "img/puzzle11.jpg";
  ims[8].src = "img/puzzle8.jpg";
  ims[9].src = "img/puzzle9.jpg";
  ims[10].src = "img/puzzle7.jpg";
  ims[11].src = "img/puzzle4.jpg";
  ims[12].src = "img/puzzle14.jpg";
  ims[13].src = "img/puzzle13.jpg";
  ims[14].src = "img/puzzle12.jpg";
  ims[15].src = "img/black.jpg";
}

function slide(p) {
  if (p == 0) {
    if (aki != 1 && aki != 4) return;
  } else if (p == 1) {
    if (aki != 0 && aki != 2 && aki != 5) return;
  } else if (p == 2) {
    if (aki != 1 && aki != 3 && aki != 6) return;
  } else if (p == 3) {
    if (aki != 2 && aki != 7) return;
  } else if (p == 4) {
    if (aki != 0 && aki != 5 && aki != 8) return;
  } else if (p == 5) {
    if (aki != 1 && aki != 4 && aki != 6 && aki != 9) return;
  } else if (p == 6) {
    if (aki != 2 && aki != 5 && aki != 7 && aki != 10) return;
  } else if (p == 7) {
    if (aki != 3 && aki != 6 && aki != 11) return;
  } else if (p == 8) {
    if (aki != 4 && aki != 9 && aki != 12) return;
  } else if (p == 9) {
    if (aki != 5 && aki != 8 && aki != 10 && aki != 13) return;
  } else if (p == 10) {
    if (aki != 6 && aki != 9 && aki != 11 && aki != 14) return;
  } else if (p == 11) {
    if (aki != 7 && aki != 10 && aki != 15) return;
  } else if (p == 12) {
    if (aki != 8 && aki != 13) return;
  } else if (p == 13) {
    if (aki != 9 && aki != 12 && aki != 14) return;
  } else if (p == 14) {
    if (aki != 10 && aki != 13 && aki != 15) return;
  } else if (p == 15) {
    if (aki != 11 && aki != 14) return;
  }
  ims[aki].src = ims[p].src;
  ims[(aki = p)].src = "img/black.jpg";

  if (
    ims[0].src.slice(-15) == "img/puzzle0.jpg" &&
    ims[1].src.slice(-15) == "img/puzzle1.jpg" &&
    ims[2].src.slice(-15) == "img/puzzle2.jpg" &&
    ims[3].src.slice(-15) == "img/puzzle3.jpg" &&
    ims[4].src.slice(-15) == "img/puzzle4.jpg" &&
    ims[5].src.slice(-15) == "img/puzzle5.jpg" &&
    ims[6].src.slice(-15) == "img/puzzle6.jpg" &&
    ims[7].src.slice(-15) == "img/puzzle7.jpg" &&
    ims[8].src.slice(-15) == "img/puzzle8.jpg" &&
    ims[9].src.slice(-15) == "img/puzzle9.jpg" &&
    ims[10].src.slice(-16) == "img/puzzle10.jpg" &&
    ims[11].src.slice(-16) == "img/puzzle11.jpg" &&
    ims[12].src.slice(-16) == "img/puzzle12.jpg" &&
    ims[13].src.slice(-16) == "img/puzzle13.jpg" &&
    ims[14].src.slice(-16) == "img/puzzle14.jpg"
  ) {
    ims[15].src = "img/puzzle15.jpg";

    document.getElementById("good").innerHTML = "CREAR‼";
  }
}
