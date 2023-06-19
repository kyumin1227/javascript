const $screen = document.querySelector("#screen");
const $result = document.querySelector("#result");

let startTime;
let endTime;
const records = [];
let timeoutId;
let best;

$screen.addEventListener("click", function () {
  if ($screen.classList.contains("waiting")) {
    // $screen.classList.remove("waiting");
    // $screen.classList.add("ready");
    $screen.classList.replace("waiting", "ready");
    $screen.textContent = "초록색이 되면 클릭하세요";
    timeoutId = setTimeout(() => {
      startTime = new Date();
      $screen.classList.replace("ready", "now");
      $screen.textContent = "클릭하세요!";
    }, Math.floor(Math.random() * 1000) + 2000); // 2000 ~ 3000 사이
  } else if ($screen.classList.contains("ready")) {
    clearTimeout(timeoutId);
    $screen.classList.replace("ready", "waiting");
    $screen.textContent = "너무 성급하시군요!";
  } else if ($screen.classList.contains("now")) {
    endTime = new Date();
    const current = endTime - startTime;
    records.push(current);
    const average = records.reduce((a, c) => a + c) / records.length;
    if (records.length >= 6) {
      best = records.sort((a, b) => a - b).slice(0, 5);
    }
    $result.textContent = best
      ? `현재 ${current}ms, 평균 ${average}ms, 베스트 ${best}`
      : `현재 ${current}ms, 평균 ${average}ms`;
    startTime = null;
    endTime = null;
    $screen.classList.replace("now", "waiting");
    $screen.textContent = "클릭해서 시작하세요";
  }
});
