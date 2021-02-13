
let displayResult = document.getElementById('display-result');

let result = '';

document.querySelectorAll('.btn').forEach((element) => {
    element.addEventListener('click', (e) => {
        const op = e.target.dataset["operable"];
        const val = e.target.dataset["value"];

        if (op && val == 'reset') {
            result = '';
        } else if (op && val == 'result') {
            result = handleResult(result);
        } else if (!op && val != 'reset') {
            result += `${e.target.dataset['value']}`;
        } else if (op && val != 'reset') {
            if (!includesOperator(result)) {
                result+= e.target.dataset['value'];
            }
        }

        displayResult.value = result;

    });
});

const includesOperator = (val) => {
    if (!val) return false;
    return (val.toString().match(/[+/*-]/g) != null);
}

const handleResult = (val) => {
    if (!val) return false;
    let str = val.toString().slice(-1);
    if (!includesOperator(str)) {
        return eval(val);
    } else {
        return val;
    }
}
