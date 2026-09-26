const order = "MSLXTMM";
const priceS = 30000;
const priceM = 36000;
const priceL = 40000;
const priceT = 8000;

const isGoldMember = true;

let total = 0;
let count = 0;

for (let i = 0; i < order.length; i++) {
    let item = order[i];

    // bỏ qua món hủy
    if (item === 'X') {
        continue;
    }

    // nếu đủ 4 món thì dừng
    if (count === 4) {
        break;
    }

    // tính tiền từng món
    if (item === 'S') {
        total = total + priceS;
        count++;
        console.log("Size S: 30000");
    } 
    else if (item === 'M') {
        total = total + priceM;
        count++;
        console.log("Size M: 36000");
    } 
    else if (item === 'L') {
        total = total + priceL;
        count++;
        console.log("Size L: 40000");
    } 
    else if (item === 'T') {
        total = total + priceT;
        count++;
        console.log("Topping: 8000");
    }
}

console.log("Tổng tiền trước giảm:", total);

if (isGoldMember === true) {
    total = total * 0.9;
}

console.log("Tổng tiền sau giảm:", total);