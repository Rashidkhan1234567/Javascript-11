

let list = [12, 15, 3, 5, 20,6 , 35, 7, 30, 1, 2];
let lists = [12, 15, 3, 5, 20,6 , 35, 7, 30, 1, 2];

for (let i = 0; i < list.length; i++) {
    if (list[i] % 3 === 0 && list[i] % 5 === 0) {
        list[i] = "ThreeFive";
    } else if (list[i] % 3 === 0) {
        list[i] = "Three";
    } else if (list[i] % 5 === 0) {
        list[i] = "Five";
    }
}

console.log(list);
document.getElementById("para1").innerHTML = (`Orignal [${lists}] <br><br>`);
document.getElementById("para2").innerHTML = (`Modified [${list}]`);