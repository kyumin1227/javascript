const { body } = document;
const $table = document.createElement("table");
const $result = document.createElement("div");
const rows = [];
let turn = "O";

const checkWinner = (target) => {
  //   let rowIndex;
  //   let cellIndex;
  //   rows.forEach((row, ri) => {
  //     // console.log(row, ri);
  //     row.forEach((cell, ci) => {
  //       //   console.log(cell, ci);
  //       if (cell === target) {
  //         rowIndex = ri;
  //         cellIndex = ci;
  //       }
  //     });
  //   });
  const rowIndex = target.parentNode.rowIndex; // tr 태그는 rowIndex 속성을 제공
  const cellIndex = target.cellIndex; // td 태그는 cellIndex 속성을 제공
  //   console.dir(target.parentNode);
  //   console.log(target.parentNode.children);
  console.log(Array.from(target.parentNode.children));
  console.log(Array.from(target.parentNode.children).indexOf(target));

  let hasWinner = false;

  if (
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
  ) {
    hasWinner = true;
  }
  if (
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
  ) {
    hasWinner = true;
  }
  if (
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
  ) {
    hasWinner = true;
  }
  if (
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
  ) {
    hasWinner = true;
  }
  return hasWinner;
};

const callback = (event) => {
  if (event.target.textContent != "") {
    console.log("빈칸이 아닙니다.");
    return;
  }
  // 빈칸인 경우
  console.log("빈칸입니다.");
  event.target.textContent = turn;
  const hasWinner = checkWinner(event.target);
  // 승자가 있는 경우
  if (hasWinner) {
    $result.textContent = `${turn}님이 승리!`;
    $table.removeEventListener("click", callback);
    return;
  }
  // 승자가 없는 경우
  //   let draw = true;
  //   rows.forEach((row) => {
  //     row.forEach((cell) => {
  //       if (!cell.textContent) {
  //         draw = false;
  //       }
  //     });
  //   });
  const draw = rows.flat().every((cell) => cell.textContent);
  if (draw) {
    $result.textContent = "무승부";
    return;
  }
  turn = turn === "X" ? "O" : "X"; // 턴 변경

  // 컴퓨터 턴
  let computer = false;
  let i;
  let j;
  while (!computer) {
    i = Math.floor(Math.random() * 3);
    j = Math.floor(Math.random() * 3);
    console.log(i, j);
    if (rows[i][j].textContent === "") {
      rows[i][j].textContent = turn;
      computer = true;
    }
  }
  const computerWin = checkWinner(rows[i][j]);
  if (computerWin) {
    $result.textContent = `컴퓨터 승리!`;
    $table.removeEventListener("click", callback);
    return;
  }

  turn = turn === "X" ? "O" : "X"; // 컴퓨터 턴 종료
};

$table.addEventListener("click", callback);

for (let i = 1; i <= 3; i++) {
  const $tr = document.createElement("tr");
  const cells = [];
  for (let j = 1; j <= 3; j++) {
    const $td = document.createElement("td");
    cells.push($td);
    $tr.appendChild($td);
  }
  rows.push(cells);
  $table.appendChild($tr);
}
body.appendChild($table);
body.appendChild($result);
