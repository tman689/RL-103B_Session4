// ===== GIẢI THÍCH LỖI =====
// Lỗi 1: Sai điều kiện vòng lặp (cupIndex < orderQuantity)
// → chỉ chạy 2 lần thay vì 3 → thiếu 1 ly (off-by-one error)

// Lỗi 2: Giảm giá đặt trong vòng lặp
// → mỗi lần lặp lại giảm tiếp → tổng tiền bị giảm sai nhiều lần

// ===== CODE ĐÃ SỬA =====

// He thong POS quay thu ngan Highlands Coffee
const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;

let sizeUpcharge = 0;
if (drinkSize === "M") sizeUpcharge = 6000;
else if (drinkSize === "L") sizeUpcharge = 10000;

// Tính tiền 1 ly
const singleCupPrice = basePrice + sizeUpcharge + (toppingsPerCup * toppingPrice);

let totalBill = 0;

//Sửa điều kiện lặp
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
  totalBill = totalBill + singleCupPrice;
}

//Giảm giá đặt ngoài vòng lặp
if (isGoldMember === true) {
  totalBill = totalBill * 0.9;
}

console.log("Tổng thanh toán:", totalBill, "VNĐ");