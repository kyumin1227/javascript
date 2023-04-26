let numOne = "";
let numTwo = "";
let operator = "";

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNum = (event) => {
    if (!operator) {
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
        return;
    }
    if (!numTwo) {
        $result.value = "";
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
}

document.querySelector('#num-0').addEventListener('click', onClickNum);
document.querySelector('#num-1').addEventListener('click', onClickNum);
document.querySelector('#num-2').addEventListener('click', onClickNum);
document.querySelector('#num-3').addEventListener('click', onClickNum);
document.querySelector('#num-4').addEventListener('click', onClickNum);
document.querySelector('#num-5').addEventListener('click', onClickNum);
document.querySelector('#num-6').addEventListener('click', onClickNum);
document.querySelector('#num-7').addEventListener('click', onClickNum);
document.querySelector('#num-8').addEventListener('click', onClickNum);
document.querySelector('#num-9').addEventListener('click', onClickNum);

const onClickOperator = (op) => () => {
    if (operator) {
        numOne = $result.value;
        numTwo = "";
    }
    if (numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert("숫자를 먼저 입력해주세요");
    }
} 

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));

const onClickCalculate = () => {
    if (numTwo) {
        switch (operator) {
            case '+':
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;
            case '-':
                $result.value = numOne - numTwo;
                break;
            case '*':
                $result.value = numOne * numTwo;
                break;
            case '/':
                $result.value = numOne / numTwo;
                break;
            default:
                break;
        }
    } else {
        alert("숫자를 먼저 입력하세요");
    }
}

document.querySelector('#calculate').addEventListener('click', onClickCalculate);

const onClickClear = () => {
    numOne = "";
    numTwo = "";
    operator = "";
    $operator.value = "";
    $result.value = "";
}

document.querySelector('#clear').addEventListener('click', onClickClear);