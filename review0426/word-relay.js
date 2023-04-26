const number = Number(prompt("몇 명이 참가하나요?"));

if (number >= 1) {
    const $button = document.querySelector("button");
    const $input = document.querySelector("input");
    const $word = document.querySelector("#word");
    const $order = document.querySelector("#order");

    let word;
    let newWord;
    let order = 1;

    const onClickButton = () => {
        if ((!word || word[word.length - 1] === newWord[0]) && newWord.length === 3) {
            word = newWord;
            $word.textContent = word;
            order++;
            $order.textContent = order;
            $input.value = "";
            $input.focus();
        } else {
            alert("올바르지 않은 단어입니다.");
            $input.focus();
        }
        if (order > number) {
            order -= number;
            $order.textContent = order;
        }
    };

    const inputText = (event) => {
        newWord = event.target.value;
    };

    $button.addEventListener("click", onClickButton);
    $input.addEventListener("input", inputText);
};