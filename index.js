let count01 = document.getElementById("count--team_1");
let count02 = document.getElementById("count--team_2");

let count = 0;

increment1 = () => {
    count += 1;
    count01.innerHTML = count;
}

increment2 = () => {
    count += 2;
    count01.innerText = count;
}

increment3 = () => {
    count += 3;
    count01.innerText = count
}

increment01 = () => {
    count += 1;
    count02.innerHTML = count;
}

increment02 = () => {
    count += 2;
    count02.innerHTML = count;
}

increment03 = () => {
    count += 3;
    count02.innerHTML = count;
}

reset = () => {
    count = 0;
    count01.innerHTML = count;
}

reset02 = () => {
    count = 0;
    count02.innerHTML = count;
}