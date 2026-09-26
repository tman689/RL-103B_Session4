// solution_ex3.js

// ===== GIẢI THÍCH LỖI =====
// Lỗi: Dùng break khi gặp 'X'
// → vòng lặp dừng ngay → các phần tử phía sau ('S', 'M') bị bỏ sót
// → sai nghiệp vụ vì vẫn còn món hợp lệ phía sau

// Cách sửa: dùng continue để bỏ qua 'X' nhưng vẫn duyệt tiếp chuỗi

const basePriceSizeS = 35000;
const extraPriceSizeM = 6000;
const extraPriceSizeL = 10000;
const toppingPrice = 8000;

const orderSizes = "MLXSM";
const toppingCount = 2;
const isGoldMember = true;

let totalDrinkAmount = 0;

for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {
  const currentDrinkSize = orderSizes[orderIndex];

  // ✅ sửa break -> continue
  if (currentDrinkSize === "X") {
    continue;
  }

  if (currentDrinkSize === "S") {
    totalDrinkAmount = totalDrinkAmount + basePriceSizeS;
  } 
  else if (currentDrinkSize === "M") {
    totalDrinkAmount = totalDrinkAmount + (basePriceSizeS + extraPriceSizeM);
  } 
  else if (currentDrinkSize === "L") {
    totalDrinkAmount = totalDrinkAmount + (basePriceSizeS + extraPriceSizeL);
  }
}

// tính tổng + topping + giảm giá
let finalBillAmount = totalDrinkAmount + (toppingCount * toppingPrice);

if (isGoldMember === true) {
  finalBillAmount = finalBillAmount * 0.9;
}

console.log("Tổng tiền hóa đơn:", finalBillAmount, "VNĐ");

/*
===== BẢNG TEST CASE =====

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|--------------------|----------------|---------------------|------------------------|
| Case 1: gặp 'X' giữa chuỗi | "MLXSM" | Chỉ tính M, L (dừng tại X) | Tính M, L, S, M |
| Case 2: nhiều phần tử sau X | "SXLM" | Bỏ hết sau X | Vẫn tính đủ các phần tử hợp lệ |

===== KẾT QUẢ ĐÚNG =====
M = 35000 + 6000 = 41000
L = 35000 + 10000 = 45000
S = 35000
M = 41000

Tổng nước = 41000 + 45000 + 35000 + 41000 = 162000
Topping = 2 * 8000 = 16000
→ Tổng = 178000

Giảm 10% → 160200 VNĐ
*/