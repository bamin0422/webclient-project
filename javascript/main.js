var dogs = [],
  checkDogs = [];
var time;
var rDogs = 8,
  dogCnt = 8;
var cnt = 11,
  cnt2 = 60;
var score = 500;

for (var i = 0; i < rDogs; i++) {
  var dogDog = Math.floor(Math.random() * 23);
  if (dogs.indexOf(dogDog) > -1) {
    i--;
    continue;
  } else dogs[i] = dogDog;
  checkDogs[i] = dogs[i];
  var dogs = [],
    checkDogs = [];
  var time;
  var rDogs = 8,
    dogCnt = 8;
  var cnt = 11,
    cnt2 = 60;
  var score = 500;

  for (var i = 0; i < rDogs; i++) {
    var dogDog = Math.floor(Math.random() * 23);
    if (dogs.indexOf(dogDog) > -1) {
      i--;
      continue;
    } else dogs[i] = dogDog;
    checkDogs[i] = dogs[i];
  }

  function CountDown() {
    time = setTimeout(CountDown, 1000);

    cnt--;
    document.getElementById("num").innerHTML = "남은시간: " + cnt + " 초";

    if (cnt == 0) {
      clearTimeout(time);
      hideDogs();
      document.getElementById("order").innerHTML = "정답을 찾으세요.";
      startGame();
    }
  }

  function startGame() {
    time = setTimeout(startGame, 1000);
    cnt2--;
    document.getElementById("num").innerHTML = "남은시간: " + cnt2 + " 초";
    if (cnt2 == 0) {
      clearTimeout(time);
      showDogs();
      document.getElementById("order").innerHTML = "Game Over";
      endGame();
    } else if (dogCnt == 0) {
      cnt2 = 1;
      endGame();
    }
  }

  function endGame() {
    if (dogCnt == 0) {
      document.getElementById("GameOver").style =
        "color: #2EFE9A; text-shadow: 0 0 2px black;";
      document.getElementById("GameOver").innerHTML = "You Win!";
    } else document.getElementById("GameOver").innerHTML = "Game Over!";
  }

  function showSomeDogs(clickedImage) {
    var image = document.getElementById(clickedImage);
    image.src = "../img/img2.gif";
    image.style = "border: 1px solid red";
  }

  function showDogs() {
    for (var i = 0; i < rDogs; i++) {
      var image = document.getElementById(String(dogs[i]));
      image.src = "../img/img2.gif";
      image.style = "border: 1px solid red";
    }
  }
  function hideDogs() {
    for (var i = 0; i < rDogs; i++) {
      var image = document.getElementById(String(dogs[i]));
      image.src = "../img/img1.gif";
      image.style = "border: 0px solid red";
    }
  }
  function scoreUp(clickedImage) {
    score += 10;
    document.getElementById("score").innerHTML = "점수: " + score;
  }
  function scoreDown(clickedImage) {
    score -= 10;
    document.getElementById("score").innerHTML = "점수: " + score;
  }

  function isntAnswer(clickedImage) {
    document.getElementById(clickedImage).style = "border: 3px solid yellow";
    t = setTimeout(function () {
      document.getElementById(clickedImage).style = "border: 0px solid yellow";
    }, 500);
  }

  function isAnswer(clickedImage) {
    var check = 0;

    for (var i = 0; i < rDogs; i++) {
      if (dogs[i] == Number(clickedImage) && cnt == 0 && checkDogs[i] != "X") {
        scoreUp(clickedImage);
        showSomeDogs(clickedImage);
        checkDogs[i] = "X";
        check = 1;
        dogCnt--;
      }
    }

    if (check == 0 && cnt == 0) {
      isntAnswer(clickedImage);
      scoreDown();
      shakeImage(clickedImage);
    }
  }
}

function CountDown() {
  time = setTimeout(CountDown, 1000);

  cnt--;
  document.getElementById("num").innerHTML = "남은시간: " + cnt + " 초";

  if (cnt == 0) {
    clearTimeout(time);
    hideDogs();
    document.getElementById("order").innerHTML = "정답을 찾으세요.";
    startGame();
  }
}

function startGame() {
  time = setTimeout(startGame, 1000);
  cnt2--;
  document.getElementById("num").innerHTML = "남은시간: " + cnt2 + " 초";
  if (cnt2 == 0) {
    clearTimeout(time);
    showDogs();
    document.getElementById("order").innerHTML = "Game Over";
    endGame();
  } else if (dogCnt == 0) {
    cnt2 = 1;
    endGame();
  }
}

function endGame() {
  if (dogCnt == 0) {
    document.getElementById("GameOver").style =
      "color: #2EFE9A; text-shadow: 0 0 2px black;";
    document.getElementById("GameOver").innerHTML = "You Win!";
  } else document.getElementById("GameOver").innerHTML = "Game Over!";
}

function showSomeDogs(clickedImage) {
  var image = document.getElementById(clickedImage);
  image.src = "../img/img2.gif";
  image.style = "border: 1px solid red";
}

function showDogs() {
  for (var i = 0; i < rDogs; i++) {
    var image = document.getElementById(String(dogs[i]));
    image.src = "../img/img2.gif";
    image.style = "border: 1px solid red";
  }
}
function hideDogs() {
  for (var i = 0; i < rDogs; i++) {
    var image = document.getElementById(String(dogs[i]));
    image.src = "../img/img1.gif";
    image.style = "border: 0px solid red";
  }
}
function scoreUp(clickedImage) {
  score += 10;
  document.getElementById("score").innerHTML = "점수: " + score;
}
function scoreDown(clickedImage) {
  score -= 10;
  document.getElementById("score").innerHTML = "점수: " + score;
}

function isntAnswer(clickedImage) {
  document.getElementById(clickedImage).style = "border: 3px solid yellow";
  t = setTimeout(function () {
    document.getElementById(clickedImage).style = "border: 0px solid yellow";
  }, 500);
}

function isAnswer(clickedImage) {
  var check = 0;

  for (var i = 0; i < rDogs; i++) {
    if (dogs[i] == Number(clickedImage) && cnt == 0 && checkDogs[i] != "X") {
      scoreUp(clickedImage);
      showSomeDogs(clickedImage);
      checkDogs[i] = "X";
      check = 1;
      dogCnt--;
    }
  }

  if (check == 0 && cnt == 0) {
    isntAnswer(clickedImage);
    scoreDown();
    shakeImage(clickedImage);
  }
}
